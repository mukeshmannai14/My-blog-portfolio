# 🚀 Full-Stack Developer Portfolio & Blog

<div align="center">

### Modern Portfolio • Blog Platform • Firebase Auth • Admin CMS

A modern, responsive full-stack developer portfolio with an integrated blog platform, secure authentication, admin-only content management, likes, and contact message management.

<br/>

**Built with React + Node.js + Express + MongoDB + Firebase + Tailwind CSS**

</div>

---

## 🌐 Project Overview

This project is a **full-stack developer portfolio and blog management platform** designed to showcase projects, skills, and technical content.

Visitors can:

- 🔐 Create an account and log in
- 👤 Access the protected portfolio
- 📚 Read published blogs
- ❤️ Like blog posts
- 📩 Send contact messages
- 📱 Use the website comfortably on mobile and desktop

The **admin** has additional privileges:

- ✍️ Create blogs
- 📝 Edit blogs
- 🗑️ Delete blogs
- 📊 Manage blog content
- 📩 View and delete contact messages

Regular users **cannot create, edit, or delete blogs**.

---

## ✨ Features

### 🔐 Authentication
- Firebase Authentication
- Email/password login
- User registration
- Protected routes
- Automatic authentication state detection
- Logout functionality
- Firebase ID token verification on the backend

### 👑 Admin Authorization
- Firebase Custom Claims
- Admin role stored as `admin: true`
- Admin-only blog CRUD
- Admin-only contact message management
- Backend authorization middleware
- Regular users are blocked from admin APIs

### 📝 Blog Platform
- View published blogs
- Blog details page
- Admin blog creation
- Admin blog editing
- Admin blog deletion
- Blog likes
- One-like-per-user logic
- Like tracking using Firebase user UID
- MongoDB Atlas storage

### 📩 Contact System
- Contact form
- Stores messages in Firebase Firestore
- Stores sender information
- Admin-only message viewing
- Admin-only message deletion
- Firestore security rules

### 🎨 Modern UI
- React
- Tailwind CSS
- Responsive design
- Mobile navigation menu
- Active navigation states
- Dark modern developer-style interface
- Responsive cards and layouts

### 🚀 Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas
- Authentication → Firebase
- Contact messages → Firebase Firestore

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Frontend build tool |
| Tailwind CSS | Styling |
| React Router | Client-side routing |
| Firebase Auth | Authentication |
| Firebase Firestore | Contact messages |
| Axios / Fetch | API communication |
| JavaScript | Application logic |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | REST API |
| MongoDB Atlas | Database |
| Mongoose | MongoDB ODM |
| Firebase Admin SDK | Token verification & admin authorization |
| CORS | Cross-origin requests |
| dotenv | Environment variables |

---

# 🏗️ Architecture

```text
                         ┌──────────────────────┐
                         │      User Browser    │
                         │   React + Vite UI    │
                         └──────────┬───────────┘
                                    │
                         Firebase Authentication
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       Firebase       │
                         │ Authentication/Auth  │
                         └──────────┬───────────┘
                                    │
                              ID Token
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    Express Backend   │
                         │      Node.js API     │
                         └───────┬───────┬──────┘
                                 │       │
                     ┌───────────┘       └────────────┐
                     ▼                                ▼
            ┌─────────────────┐              ┌─────────────────┐
            │   MongoDB Atlas │              │ Firebase Admin  │
            │  Blog Database  │              │ Token / Claims  │
            └─────────────────┘              └─────────────────┘

                         Firebase Firestore
                                ▲
                                │
                         Contact Messages
```

---

# 📁 Project Structure

```text
My-blog-portfolio/
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── firebaseAdmin.js
│   │
│   ├── controllers/
│   │   └── blogController.js
│   │
│   ├── middleware/
│   │   ├── authenticate.js
│   │   └── isAdmin.js
│   │
│   ├── models/
│   │   └── Blog.js
│   │
│   ├── routes/
│   │   └── blogRoutes.js
│   │
│   ├── scripts/
│   │   └── setAdmin.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── authContext.jsx
│   │   │
│   │   ├── firebase/
│   │   │   └── firebaseConfig.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── BlogDetails.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── AdminMessages.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── vercel.json
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🔑 Authentication Flow

```text
User
 │
 ▼
Login / Signup
 │
 ▼
Firebase Authentication
 │
 ▼
Firebase User
 │
 ▼
ID Token
 │
 ▼
Frontend API Request
 │
 ▼
Authorization: Bearer <token>
 │
 ▼
Express Backend
 │
 ▼
Firebase Admin SDK
 │
 ▼
Token Verified
 │
 ▼
Request Allowed
```

The backend never trusts a user-provided admin value. It verifies the Firebase ID token and checks the Firebase custom claim.

---

# 👑 Admin Authorization

The admin account receives a Firebase custom claim:

```json
{
  "admin": true
}
```

The backend checks this claim before allowing protected admin operations.

Example:

```text
Authentication
      ↓
Firebase Token Verification
      ↓
Is admin === true?
      ↓
   ┌──┴──┐
  YES    NO
   │      │
   ▼      ▼
Allow   403 Forbidden
```

---

# 📝 Blog API

Base URL:

```text
/api/blogs
```

| Method | Endpoint | Access | Purpose |
|---|---|---|---|
| GET | `/api/blogs` | Public | Get published blogs |
| GET | `/api/blogs/:id` | Public | Get a blog |
| GET | `/api/blogs/admin/all` | Admin | Get all blogs |
| POST | `/api/blogs` | Admin | Create blog |
| PUT | `/api/blogs/:id` | Admin | Update blog |
| DELETE | `/api/blogs/:id` | Admin | Delete blog |
| POST | `/api/blogs/:id/like` | User | Like/unlike blog |

---

# 🗄️ Blog Data Model

```js
{
  title: String,
  excerpt: String,
  content: String,
  image: String,
  author: String,
  likes: Number,
  likedBy: [String],
  published: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

`likedBy` contains Firebase user UIDs so the application can prevent the same authenticated user from repeatedly increasing the like count.

---

# 📩 Contact Message System

Contact messages are stored in Firebase Firestore.

Collection:

```text
contacts
```

Example document:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "phone": "9876543210",
  "subject": "Project Inquiry",
  "message": "Hello...",
  "userId": "firebase-user-id",
  "userEmail": "user@example.com",
  "createdAt": "server timestamp"
}
```

Only authenticated users can create messages.

Only admins can read, update, or delete messages.

---

# 🔒 Firestore Security Rules

The project uses rules similar to:

```text
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /contacts/{contactId} {
      allow create: if request.auth != null;

      allow read: if request.auth != null
        && request.auth.token.admin == true;

      allow update: if request.auth != null
        && request.auth.token.admin == true;

      allow delete: if request.auth != null
        && request.auth.token.admin == true;
    }
  }
}
```

---

# ⚙️ Environment Variables

## Frontend

Create:

```text
frontend/.env
```

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_API_URL=https://your-backend.onrender.com
```

## Backend

Create:

```text
backend/.env
```

```env
MONGO_URI=your_mongodb_connection_string

FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_admin_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
```

> ⚠️ Never commit `.env` files, Firebase service-account private keys, MongoDB passwords, or other secrets to GitHub.

---

# 🚀 Run Locally

## 1. Clone the repository

```bash
git clone https://github.com/mukeshmannai14/My-blog-portfolio.git
cd My-blog-portfolio
```

## 2. Install backend dependencies

```bash
cd backend
npm install
```

## 3. Configure backend `.env`

Add your MongoDB and Firebase Admin credentials.

## 4. Start backend

```bash
node server.js
```

Backend:

```text
http://localhost:5000
```

---

## 5. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

## 6. Configure frontend `.env`

Add Firebase client configuration and:

```env
VITE_API_URL=http://localhost:5000
```

## 7. Start frontend

```bash
npm run dev
```

Frontend will normally run at:

```text
http://localhost:5173
```

---

# 🌍 Production Deployment

## Frontend — Vercel

Recommended configuration:

```text
Root Directory: frontend
Framework: Vite
Build Command: npm run build
```

Add the frontend environment variables in Vercel.

Important:

```env
VITE_API_URL=https://your-backend.onrender.com
```

### React Router Vercel Fix

Because this is a React SPA, direct navigation to routes such as:

```text
/login
/signup
/blog
/contact
```

requires a Vercel rewrite.

Create:

```text
frontend/vercel.json
```

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

# 🖥️ Backend — Render

Recommended Render configuration:

```text
Root Directory: backend
Build Command: npm install
Start Command: node server.js
```

Add:

```text
MONGO_URI
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY
```

The backend provides:

```text
GET /
```

Expected response:

```json
{
  "message": "Portfolio API is running"
}
```

---

# 🧪 Testing Checklist

## Authentication

- [ ] Signup works
- [ ] Login works
- [ ] Logout works
- [ ] Invalid credentials are handled
- [ ] Protected pages redirect unauthenticated users
- [ ] Admin claim works

## Portfolio

- [ ] Home page
- [ ] About page
- [ ] Skills page
- [ ] Projects page
- [ ] Blog page
- [ ] Contact page
- [ ] Mobile navigation

## Blog

- [ ] Blog list loads
- [ ] Blog details load
- [ ] Admin can create
- [ ] Admin can edit
- [ ] Admin can delete
- [ ] Regular user cannot manage blogs
- [ ] Like works
- [ ] Like/unlike works

## Contact

- [ ] Contact form submits
- [ ] Message appears in Firestore
- [ ] Admin can view messages
- [ ] Admin can delete messages
- [ ] Regular users cannot access admin messages

## Production

- [ ] Frontend deployed
- [ ] Backend deployed
- [ ] MongoDB connected
- [ ] Firebase connected
- [ ] Vercel environment variables added
- [ ] Render environment variables added
- [ ] React Router rewrite configured
- [ ] Production API URL configured
- [ ] CORS configured for production

---

# 🔐 Security Recommendations

For production:

### 1. Restrict CORS

Instead of:

```js
app.use(cors());
```

use your deployed frontend origin:

```js
app.use(
  cors({
    origin: "https://your-frontend.vercel.app"
  })
);
```

### 2. Protect secrets

Never upload:

```text
.env
serviceAccountKey.json
private keys
database passwords
API secrets
```

### 3. Validate API input

Add validation for:

- Blog title
- Blog content
- Image URL
- Contact form fields

### 4. Rate limiting

Consider adding API rate limiting before production.

### 5. Error handling

Use a centralized Express error-handling middleware for production.

---

# 📱 Responsive Design

The UI is designed for:

```text
📱 Mobile
   ↓
📲 Tablet
   ↓
💻 Laptop
   ↓
🖥️ Desktop
```

The navbar automatically changes to a mobile menu on smaller screens.

---

# 📌 Application Routes

| Route | Purpose |
|---|---|
| `/` | Redirect to login |
| `/login` | User login |
| `/signup` | User registration |
| `/home` | Portfolio home |
| `/about` | About section |
| `/skills` | Technical skills |
| `/projects` | Projects |
| `/blog` | Blog listing |
| `/blog/:id` | Blog details |
| `/contact` | Contact form |
| `/admin` | Admin dashboard |
| `/admin/messages` | Contact message management |

---

# 🔄 Git Workflow

After making changes:

```bash
git status
```

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "Update portfolio"
```

Push:

```bash
git push origin main
```

If Vercel is connected to GitHub, the frontend can automatically redeploy after the push.

---

# 🐛 Common Issues

## Vercel shows 404 on `/login`

Make sure:

```text
frontend/vercel.json
```

contains:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Then commit and push:

```bash
git add frontend/vercel.json
git commit -m "Fix React Router deployment"
git push origin main
```

---

## Blogs are not loading

Check:

```env
VITE_API_URL=https://your-backend.onrender.com
```

Also verify the Render backend is running.

---

## Admin button is missing

After assigning the Firebase admin claim, log out and log in again so the ID token refreshes.

---

## Contact messages cannot be read

Check:

1. Firebase Authentication
2. Admin custom claim
3. Firestore rules
4. Logged-in account
5. Firebase project configuration

---

# 🎯 Future Improvements

Possible upgrades:

- 🖼️ Cloudinary image upload
- 🔎 Blog search
- 🏷️ Blog categories and tags
- 📄 Pagination
- 🌙 Light/dark theme switcher
- 📊 Admin analytics dashboard
- 💬 Blog comments
- 🔔 Admin notifications
- 📧 Email notifications
- ✍️ Markdown editor
- 🧑‍💻 GitHub project integration
- 📈 Visitor analytics
- ⚡ React Query / TanStack Query
- 🛡️ API rate limiting
- ✅ Request validation with Zod/Joi
- 🐳 Docker deployment
- 🧪 Automated testing

---

# 💡 Why This Project?

This project demonstrates practical full-stack development concepts:

- React component architecture
- React Router
- Authentication
- Authorization
- Firebase Custom Claims
- REST API development
- Express middleware
- MongoDB CRUD
- Firestore security
- Environment variables
- API integration
- Responsive UI
- Git/GitHub
- Vercel deployment
- Render deployment
- Production debugging

It is suitable as a **full-stack developer portfolio project** and can be extended into a complete personal CMS.

---

# 📊 Project Highlights

```text
Frontend       → React + Vite
Styling        → Tailwind CSS
Authentication → Firebase Auth
Authorization  → Firebase Custom Claims
Backend        → Node.js + Express
Database       → MongoDB Atlas
Messages       → Firebase Firestore
Frontend Host  → Vercel
Backend Host   → Render
Version Control→ Git + GitHub
```

---

# 👨‍💻 Author

**Mukesh Mannai**

Full-Stack Developer

GitHub:

https://github.com/mukeshmannai14/My-blog-portfolio

---

# ⭐ Support

If this project helped you or you found it useful, consider giving the repository a ⭐ on GitHub.

---

<div align="center">

### 🚀 Built with React, Node.js, Express, MongoDB & Firebase

**Thanks for visiting!**

</div>
