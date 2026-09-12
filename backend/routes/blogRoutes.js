const express = require("express");

const {
  getBlogs,
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleLike,
} = require("../controllers/blogController");

const authenticate = require("../middleware/authenticate");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

// ==============================
// PUBLIC BLOG ROUTES
// ==============================

// Get published blogs
router.get("/", getBlogs);

// ==============================
// ADMIN BLOG ROUTES
// ==============================

// Get all blogs including drafts
router.get(
  "/admin/all",
  authenticate,
  isAdmin,
  getAllBlogs
);

// Create blog
router.post(
  "/",
  authenticate,
  isAdmin,
  createBlog
);

// Update blog
router.put(
  "/:id",
  authenticate,
  isAdmin,
  updateBlog
);

// Delete blog
router.delete(
  "/:id",
  authenticate,
  isAdmin,
  deleteBlog
);

// ==============================
// LIKE / UNLIKE
// ==============================

// Logged-in users can like/unlike
router.post(
  "/:id/like",
  authenticate,
  toggleLike
);

// ==============================
// SINGLE BLOG
// ==============================

router.get(
  "/:id",
  getBlogById
);

module.exports = router;