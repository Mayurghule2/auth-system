# Google OAuth Authentication System

A full-stack authentication system using Google OAuth 2.0 that enables secure login and logout functionality with user persistence.

---

## 🚀 Features

- Google Sign-In using OAuth 2.0
- Secure authentication using JWT (HTTP-only cookies)
- User data stored in MongoDB
- Protected routes with middleware
- Login / Logout functionality
- Responsive UI with Tailwind CSS
- Dark mode support
- Error handling and loading states

---

## 🛠 Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Passport.js (Google OAuth)

**Authentication**
- Google OAuth 2.0
- JWT (stored in HTTP-only cookies)

---

## 📁 Project Structure


google-auth-system/
│
├── client/ # React frontend
├── server/ # Node.js backend


---

## ⚙️ Setup Instructions

### 1. Clone Repository


git clone https://github.com/your-username/google-auth-system.git

cd google-auth-system


---

## 🔧 Backend Setup


cd server
npm install


Create `.env` file:


PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret


Run backend:


npm run dev


---

## 💻 Frontend Setup


cd client
npm install
npm run dev


---

## 🔐 Google OAuth Setup

1. Go to Google Cloud Console  
2. Create a project  
3. Configure OAuth Consent Screen  
4. Create OAuth Client ID  

Add authorized redirect URI:


http://localhost:5000/auth/google/callback


---

## 🔄 Authentication Flow

1. User clicks "Login with Google"
2. Redirect to Google OAuth
3. Google authenticates user
4. Callback hits backend
5. Backend:
   - Creates/fetches user
   - Generates JWT
   - Stores in HTTP-only cookie
6. Frontend fetches user via `/auth/me`

---

## 🔒 Security Implementation

- JWT stored in HTTP-only cookies (prevents XSS)
- Protected routes via middleware
- OAuth-based login (no password handling)
- Token verification on each request

---

## 🌐 API Endpoints

| Method | Endpoint              | Description          |
|--------|----------------------|----------------------|
| GET    | /auth/google         | Start OAuth flow     |
| GET    | /auth/google/callback| OAuth callback       |
| GET    | /auth/me             | Get current user     |
| POST   | /auth/logout         | Logout user          |

---

## 🚀 Deployment

**Frontend**
- Vercel

**Backend**
- Render / Railway

**Important Changes**
- Use HTTPS
- Set cookie `secure: true`
- Update Google OAuth redirect URI

---

## ⚠️ Common Issues

- `redirect_uri_mismatch` → mismatch in Google Console
- Tailwind not working → check content paths
- Cookies not sent → enable `withCredentials`

---

## 📌 Future Improvements

- Role-based access control (RBAC)
- Refresh tokens
- CSRF protection
- User dashboard enhancements

---

## 👨‍💻 Author

Mayur Ghule