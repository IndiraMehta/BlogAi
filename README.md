# BlogAI

BlogAI is a full-stack blog platform where users can read published posts, leave comments, and admins can manage blogs, comments, and drafts from a dedicated dashboard.

## Features

- Responsive blog website for readers
- Blog details page with comments
- Admin login and dashboard
- Create, publish, draft, and delete blog posts
- Comment moderation and approval
- AI-assisted content generation using Gemini
- Image upload and optimization via ImageKit

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- Multer for file uploads

### Integrations
- Google Gemini API for AI-generated content
- ImageKit for image hosting and optimization

## Project Structure

```bash
BlogAi/
├── client/          # React frontend
├── server/          # Express backend
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:
- Node.js (v18 or newer recommended)
- npm
- MongoDB database (local or MongoDB Atlas)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd BlogAi
```

### 2. Backend setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/quickblog
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run server
```

### 3. Frontend setup

```bash
cd ../client
npm install
npm run dev
```

Open your browser and visit:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Available Scripts

### Server
- `npm run server` — start the server with nodemon
- `npm start` — start the server normally

### Client
- `npm run dev` — start the Vite development server
- `npm run build` — build the frontend for production
- `npm run preview` — preview the production build

## API Overview

The backend exposes routes under `/api` for:
- blog listing and details
- comment submission
- admin authentication
- blog management
- comment moderation
- AI content generation

## Notes

- The admin dashboard is protected with JWT-based authentication.
- Blog images are uploaded and optimized through ImageKit.
- AI-generated content is powered by the Gemini API.

## License

This project is open for learning and personal use.
