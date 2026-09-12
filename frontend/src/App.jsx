import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/HomeTemp.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminMessages from "./pages/AdminMessages.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* AUTH */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* HOME */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      {/* ABOUT */}
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

      {/* SKILLS */}
      <Route
        path="/skills"
        element={
          <ProtectedRoute>
            <Skills />
          </ProtectedRoute>
        }
      />

      {/* PROJECTS */}
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        }
      />

      {/* BLOG */}
      <Route
        path="/blog"
        element={
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        }
      />

      {/* BLOG DETAILS */}
      <Route
        path="/blog/:id"
        element={
          <ProtectedRoute>
            <BlogDetails />
          </ProtectedRoute>
        }
      />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* ADMIN MESSAGES */}
      <Route
        path="/admin/messages"
        element={
          <ProtectedRoute>
            <AdminMessages />
          </ProtectedRoute>
        }
      />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;