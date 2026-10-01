import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { MongoClient } from 'mongodb';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * ---------------------------------------------------------------------------
 * MongoDB connection (native driver)
 * ---------------------------------------------------------------------------
 */
const MONGODB_URI =
  process.env['MONGODB_URI'] ?? 'mongodb+srv://khaliru_db_user:p4XomVyXFaI00FPm@cluster0.m038i9c.mongodb.net/?appName=Cluster0';

const mongoClient = new MongoClient(MONGODB_URI);
const dbConnection = mongoClient
  .connect()
  .then((client) => {
    console.log(`✅ Connected to MongoDB at ${MONGODB_URI}`);
    return client.db();
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    throw err;
  });

/**
 * ---------------------------------------------------------------------------
 * REST API endpoints
 * ---------------------------------------------------------------------------
 */
app.use(express.json());

// ---- Users ----
app.get('/api/users', async (req, res) => {
  try {
    const db = await dbConnection;
    const users = await db
      .collection('users')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    res.json(users);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const db = await dbConnection;
    const now = new Date();
    const doc = { ...req.body, createdAt: now, updatedAt: now };
    const result = await db.collection('users').insertOne(doc);
    res.status(201).json({ _id: result.insertedId, ...doc });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// ---- Pets ----
app.get('/api/pets', async (req, res) => {
  try {
    const db = await dbConnection;
    const pets = await db
      .collection('pets')
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    res.json(pets);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/pets', async (req, res) => {
  try {
    const db = await dbConnection;
    const now = new Date();
    const doc = { ...req.body, createdAt: now, updatedAt: now };
    const result = await db.collection('pets').insertOne(doc);
    res.status(201).json({ _id: result.insertedId, ...doc });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}


export const reqHandler = createNodeRequestHandler(app);