# Arkayuga Backend

Simple Express server that stores contact form submissions into MySQL.

Setup:

1. Ensure you have MySQL/MariaDB running and create a database (e.g. `arkayuga`).
2. Copy `.env.example` to `.env` and set your DB credentials.

Install and run:

```bash
cd server
npm install
npm start
```

The server listens on port `4000` by default and exposes `POST /api/contact`.

Environment variables (see `.env.example`):
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`
- `FRONTEND_ORIGIN` to allow CORS from your dev frontend

The server will automatically create the `contacts` table if it does not exist.
