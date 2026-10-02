# Pet & User Management System

A lightweight Angular application for managing pets and users through a simple dashboard interface.

## Overview

This project was created to provide a clean CRUD-style management experience for tracking pets and users in a single app. It includes a landing page, navigation, route-based pages, and dedicated forms for adding records.

## Tech Stack

- Angular 22
- TypeScript
- Angular Router
- Angular CLI
- CSS for styling

## Features

- Home dashboard with a welcoming landing screen
- Add user form
- Add pet form
- User list page
- Pet list page
- Navigation bar for quick access between sections
- Component-based Angular structure for maintainability

## Project Structure

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
    app.css
```

## Prerequisites

Make sure the following are installed on your machine:

- Node.js 20 or newer
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the App

Start the local development server:

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

The app will reload automatically while you make changes.

## Available Scripts

```bash
npm start        # start the Angular development server
npm run build    # create a production build
npm run watch    # build in watch mode
npm test         # run the test suite
```

## Routes

The app currently includes these routes:

- `/` – Home page
- `/add-user` – Add user page
- `/add-pet` – Add pet page
- `/user` – User list page
- `/pet` – Pet list page

## Development Notes

This project is structured as a small management dashboard and is suitable for extension with:

- backend API integration
- database persistence
- validation and error handling
- improved forms and filtering

## License

This project is intended for educational and local development use unless otherwise specified by the project owner.


Author
Khadijah Haliru