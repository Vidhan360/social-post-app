# 🚀 SocialHub - Full Stack Social Media Platform

A modern full-stack social media web application built using the MERN Stack. Users can create accounts, log in securely, create posts, upload images, like posts, comment on posts, manage profiles, and interact with other users through a responsive and modern interface.

---

## 🌐 Live Demo

### Frontend (Vercel)

https://social-post-app-alpha.vercel.app/

### Backend API (Render)

https://socialhub-backend-toxk.onrender.com

---

# 📸 Project Screenshots

All screenshots are available inside the `Screenshots` folder.

### Authentication

* Login Page
* Signup Page

### Social Feed

* Home Feed
* Create Post
* Image Upload
* Likes & Comments

### User Profile

* Profile Page
* User Posts
* Post Count

### Deployment

* MongoDB Atlas Connection
* Render Backend Deployment
* Vercel Frontend Deployment

---

# ✨ Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Logout Functionality
* Session Persistence

## Social Features

* Create Posts
* Upload Images
* View Feed
* Like Posts
* Unlike Posts
* Add Comments
* Delete Own Posts
* Delete Own Comments

## Profile Management

* User Profile Page
* View User Posts
* Real-Time Post Count
* Personal Dashboard

## UI / UX

* Responsive Design
* Mobile Bottom Navigation
* Glassmorphism UI
* Smooth Animations
* Framer Motion Effects
* Animated Background
* Modern Gradient Theme

## Backend Features

* REST API Architecture
* JWT Authorization
* MongoDB Database
* Multer Image Upload
* Pagination Support
* Secure Password Hashing

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Material UI (MUI)
* React Router DOM
* Axios
* Framer Motion
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* BcryptJS
* Multer

## Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# 📂 Project Structure

```bash
Social-Post-App
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── context
│   │   └── theme
│   │
│   └── public
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── uploads
│
└── Screenshots
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

---

## Frontend (.env)

```env
VITE_API_URL=YOUR_BACKEND_API_URL
```

Example:

```env
VITE_API_URL=https://your-render-backend.onrender.com/api
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Social-Post-App.git

cd Social-Post-App
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

Run Backend

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

---

## Posts

### Create Post

```http
POST /api/posts
```

### Get All Posts

```http
GET /api/posts
```

### Get Single Post

```http
GET /api/posts/:id
```

### Like Post

```http
PUT /api/posts/:id/like
```

### Comment On Post

```http
POST /api/posts/:id/comment
```

### Delete Post

```http
DELETE /api/posts/:id
```

---

# Pagination

Backend pagination support implemented using:

```javascript
const page = Number(req.query.page) || 1;

const limit = Number(req.query.limit) || 10;

const skip = (page - 1) * limit;
```

Example:

```http
GET /api/posts?page=1&limit=10
```

---

# Security Features

* JWT Authentication
* Protected Routes
* Password Hashing using BcryptJS
* Input Validation
* Middleware Authorization
* Secure API Endpoints

---

# Future Enhancements

* Follow / Unfollow System
* Real-Time Notifications
* Direct Messaging
* Cloudinary Image Storage
* Search Functionality
* Friend Requests
* Dark / Light Theme Toggle

---

# Learning Outcomes

This project helped in understanding:

* Full Stack Development
* REST APIs
* JWT Authentication
* MongoDB Integration
* Frontend Routing
* State Management
* Deployment Process
* Production Debugging
* Git & GitHub Workflow

---

# Author

**Vidhan Mishra**

B.Tech Computer Science Engineering

---

# License

This project is developed for educational and learning purposes.
