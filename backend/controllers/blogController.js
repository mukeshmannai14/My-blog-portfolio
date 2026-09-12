const Blog = require("../models/Blog");

// ==============================
// GET PUBLISHED BLOGS
// ==============================

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blogs",
      error: error.message,
    });
  }
};

// ==============================
// GET ALL BLOGS FOR ADMIN
// ==============================

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch admin blogs",
      error: error.message,
    });
  }
};

// ==============================
// GET SINGLE BLOG
// ==============================

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog || !blog.published) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blog",
      error: error.message,
    });
  }
};

// ==============================
// CREATE BLOG
// ==============================

const createBlog = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      image,
      published,
    } = req.body;

    const blog = await Blog.create({
      title,
      excerpt,
      content,
      image,
      published: published ?? true,
      author: req.user.email,
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create blog",
      error: error.message,
    });
  }
};

// ==============================
// UPDATE BLOG
// ==============================

const updateBlog = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      image,
      published,
    } = req.body;

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    blog.title = title;
    blog.excerpt = excerpt;
    blog.content = content;
    blog.image = image;
    blog.published = published;

    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update blog",
      error: error.message,
    });
  }
};

// ==============================
// DELETE BLOG
// ==============================

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    await Blog.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete blog",
      error: error.message,
    });
  }
};

// ==============================
// LIKE / UNLIKE BLOG
// ==============================

const toggleLike = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog || !blog.published) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    const userId = req.user.uid;

    const alreadyLiked = blog.likedBy.includes(userId);

    if (alreadyLiked) {
      // Unlike
      blog.likedBy = blog.likedBy.filter(
        (id) => id !== userId
      );

      blog.likes = Math.max(0, blog.likes - 1);
    } else {
      // Like
      blog.likedBy.push(userId);
      blog.likes += 1;
    }

    await blog.save();

    res.status(200).json({
      likes: blog.likes,
      liked: !alreadyLiked,
    });
  } catch (error) {
    console.error("Like error:", error);

    res.status(500).json({
      message: "Failed to update like",
      error: error.message,
    });
  }
};

// ==============================
// EXPORTS
// ==============================

module.exports = {
  getBlogs,
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleLike,
};