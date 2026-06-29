# BlogAI

BlogAI is a full-stack blog platform where users can read published posts, leave comments, and admins can manage blogs, comments, and drafts from a dedicated dashboard.

---

## Features

- Responsive blog website for readers
- Blog details page with comments
- Admin login and dashboard
- Create, publish, draft, and delete blog posts
- Comment moderation and approval
- AI-assisted content generation using Gemini
- Image upload and optimization via ImageKit

---

## Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- Redis — caching and session management
- JWT authentication
- Multer for file uploads

### Integrations
- Google Gemini API — AI-generated content
- ImageKit — image hosting and optimization

---

## Project Structure

```
BlogAi/
├── client/          # React frontend (Vite)
├── server/          # Express backend
├── docker-compose.yml
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js v18 or newer
- npm
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Redis (local or via Docker)
- Docker + Docker Compose (optional, for containerised setup)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd BlogAi
```

### 2. Run with Docker (recommended)

Make sure Docker Desktop is running, then:

```bash
docker-compose up --build
```

This starts the backend, MongoDB, and Redis together. The frontend can still be run separately with `npm run dev` from the `client/` folder.

| Service      | URL                     |
|--------------|-------------------------|
| Frontend     | http://localhost:5173   |
| Backend API  | http://localhost:3000   |
| Redis        | localhost:6379          |

To stop all containers:

```bash
docker-compose down
```

### 3. Manual backend setup

### 3. Manual backend setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/quickblog
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm run server
```

### 4. Frontend setup

```bash
cd ../client
npm install
npm run dev
```

---

## Available Scripts

### Server

| Command            | Description                      |
|--------------------|----------------------------------|
| `npm run server`   | Start with nodemon (auto-reload) |
| `npm start`        | Start normally                   |

### Client

| Command            | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start Vite development server      |
| `npm run build`    | Build for production               |

---

## API Overview

All routes are prefixed with `/api` and cover:

- Blog listing and post details
- Comment submission
- Admin authentication
- Blog management (create, publish, draft, delete)
- Comment moderation and approval
- AI content generation via Gemini

---

## Notes

- The admin dashboard is protected with JWT-based authentication.
- Blog images are uploaded and served through ImageKit.
- AI-generated content is powered by the Google Gemini API.
- Redis is used for caching; make sure a Redis instance is running before starting the server manually, or use Docker Compose which handles it automatically.

---

## License

This project is open for learning and personal use.