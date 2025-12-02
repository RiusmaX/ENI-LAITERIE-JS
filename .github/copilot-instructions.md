# Copilot Instructions for Deliveroo Project

## Architecture Overview

This project is a full-stack web application for managing restaurants.
- **Frontend**: Vanilla JavaScript served by Vite, using Tailwind CSS for styling.
- **Backend**: Node.js with Express, serving a REST API.
- **Database**: MariaDB, managed via Docker Compose, accessed using Sequelize ORM.

### Key Directories
- `api/`: Backend source code (Server, Routes, Models).
- `src/`: Frontend source code (JS, Classes).
- `compose.yml`: Docker Compose configuration for MariaDB and PhpMyAdmin.

## Developer Workflow

### Startup Sequence
1. **Database**: Start the MariaDB container.
   ```bash
   docker compose up -d
   ```
2. **Backend**: Install dependencies and start the API server (runs on port 3000).
   ```bash
   cd api
   npm install
   npm run dev
   ```
3. **Frontend**: Install dependencies and start the Vite dev server.
   ```bash
   npm install
   npm run dev
   ```

### Environment Configuration
- Backend uses `.env.local` for configuration (loaded in `api/server.js`).
- Database credentials are defined in `compose.yml` and must match `api/.env.local` (or environment variables).

## Coding Conventions

### Backend (Node.js/Express)
- **Database Connection**: Explicitly open the database connection in route handlers using `openConnectionToDatabase()` from `api/utils/db.js`.
- **ORM**: Use Sequelize for database interactions. Models are located in `api/models/`.
- **Response Format**:
  - Success: `{ "message": "OK", "data": ... }`
  - Error: `{ "error": ... }`
- **Routing**: Routes are defined in `api/routes/` and mounted in `api/server.js`.

### Frontend (Vanilla JS)
- **Styling**: Use Tailwind CSS classes directly in HTML or dynamically applied in JavaScript (e.g., `getColorFromType` in `src/js/restaurants.js`).
- **Validation**: Use `yup` schemas for form validation (see `src/js/validation/forms.validation.js`).
- **API Interaction**: Use `fetch` to communicate with `http://localhost:3000`.
- **Linting**: Follow standard JS conventions. Note that database fields might be `snake_case` (e.g., `type_nourriture`), which may require `// eslint-disable-line camelcase`.

## Common Patterns
- **Data Fetching**: Frontend fetches data asynchronously and updates the DOM.
- **Dynamic Classes**: Utility functions (like `getColorFromType`) map data properties to Tailwind CSS classes.
