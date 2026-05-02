# 🚀 Team Task Manager

A full-stack web app to create projects, assign tasks, and track progress with role-based access (Admin/Member).

---

## 🔥 Features

* Authentication (Signup/Login)
* Role-based access
* Project management
* Task creation & tracking

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB

---

## ⚙️ Setup

### Backend

```bash
cd backend
npm install
node server.js
```

Create `.env`:

```env
MONGO_URI=your_mongodb_url
```

---

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔑 API Routes

* POST `/api/auth/signup`
* POST `/api/auth/login`
* POST `/api/projects`
* GET `/api/projects`
* POST `/api/tasks`
* GET `/api/tasks`

---

## 🔐 Auth Header

```bash
Authorization: Bearer <token>
```

---

## 👩‍💻 Author

Rekha Maurya
