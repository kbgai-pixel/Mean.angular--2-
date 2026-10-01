# Pet & User Management System

A simple Angular application for managing pets and users in one place. The app includes a home dashboard, forms for adding records, and dedicated pages for viewing users and pets.

## Overview

This project is built with Angular 22 and provides a clean, route-based interface for:

- viewing the home dashboard
- adding new users
- adding new pets
- browsing the users list
- browsing the pets list

## Features

- Responsive navigation bar for all main sections
- Dedicated pages for home, user management, and pet management
- Angular routing for a lightweight single-page experience
- Modular component structure for organizing UI and logic

## Project structure

```text
src/
  app/
    add-pet-page/
    add-user-page/
    home-page/
    navbar/
    pet-form/
    pet-list/
    pet-page/
    user-form/
    user-list/
    user-page/
    app.routes.ts
    app.ts
    app.html
```

## Prerequisites

Before running the app, make sure you have:

- Node.js 20+ recommended
- npm

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open the app in your browser:

```text
http://localhost:4200/
```

The Angular dev server automatically reloads when source files change.

## Available scripts

| Script | Command | Purpose |
| --- | --- | --- |
| Start | `npm start` | Launch the Angular development server |
| Build | `npm run build` | Create a production build |
| Watch | `npm run watch` | Build in watch mode during development |
| Test | `npm test` | Run the test suite |
| SSR serve | `npm run serve:ssr:petmgtsystem` | Serve the server-rendered build |

## Application routes

The app currently includes these routes:

- `/` – Home page
- `/add-user` – Add user page
- `/add-pet` – Add pet page
- `/user` – Users list page
- `/pet` – Pets list page

## Development notes

- This app uses Angular CLI and Angular Router.
- Styling and component structure are organized under the `src/app` directory.
- The project is set up as a small management dashboard, suitable for extension with backend APIs or persistence later.

## Useful commands

```bash
# run the app
npm start

# create a production build
npm run build

# run tests
npm test
```

## License

This project is for educational and local development use unless otherwise specified by the project owner.
