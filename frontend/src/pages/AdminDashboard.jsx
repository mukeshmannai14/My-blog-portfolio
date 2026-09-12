import { useEffect, useState } from "react";
import { getIdTokenResult } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { auth } from "../firebase/firebaseConfig";

const API_URL = import.meta.env.VITE_API_URL;

function AdminDashboard() {
  const navigate = useNavigate();

  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [blogs, setBlogs] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    published: true,
  });

  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [creating, setCreating] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =====================================================
  // CHECK ADMIN
  // =====================================================

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          navigate("/login");
          return;
        }

        const tokenResult = await getIdTokenResult(user);

        if (tokenResult.claims.admin === true) {
          setIsAdmin(true);
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Admin check failed:", error);
        navigate("/home");
      } finally {
        setChecking(false);
      }
    };

    checkAdmin();
  }, [navigate]);

  // =====================================================
  // FETCH BLOGS
  // =====================================================

  const fetchBlogs = async () => {
    try {
      setLoadingBlogs(true);
      setError("");

      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const token = await user.getIdToken();

      const response = await axios.get(
        `${API_URL}/api/blogs/admin/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch admin blogs:", error);

      setError(
        error.response?.data?.message ||
          "Failed to load blogs."
      );
    } finally {
      setLoadingBlogs(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchBlogs();
    }
  }, [isAdmin]);

  // =====================================================
  // FORM CHANGE
  // =====================================================

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // =====================================================
  // CREATE / UPDATE BLOG
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setCreating(true);
    setMessage("");
    setError("");

    try {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const token = await user.getIdToken();

      if (editingBlog) {
        // UPDATE

        const response = await axios.put(
          `${API_URL}/api/blogs/${editingBlog._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs((currentBlogs) =>
          currentBlogs.map((blog) =>
            blog._id === editingBlog._id
              ? response.data
              : blog
          )
        );

        setMessage("Blog updated successfully!");
      } else {
        // CREATE

        const response = await axios.post(
          `${API_URL}/api/blogs`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBlogs((currentBlogs) => [
          response.data,
          ...currentBlogs,
        ]);

        setMessage("Blog created successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Blog save error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to save blog."
      );
    } finally {
      setCreating(false);
    }
  };

  // =====================================================
  // EDIT BLOG
  // =====================================================

  const handleEdit = (blog) => {
    setEditingBlog(blog);

    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image || "",
      published: blog.published,
    });

    setShowForm(true);

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // DELETE BLOG
  // =====================================================

  const handleDelete = async (blogId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setMessage("");
      setError("");

      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const token = await user.getIdToken();

      await axios.delete(
        `${API_URL}/api/blogs/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogs((currentBlogs) =>
        currentBlogs.filter(
          (blog) => blog._id !== blogId
        )
      );

      setMessage("Blog deleted successfully!");
    } catch (error) {
      console.error("Delete blog error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to delete blog."
      );
    }
  };

  // =====================================================
  // RESET FORM
  // =====================================================

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      image: "",
      published: true,
    });

    setEditingBlog(null);
    setShowForm(false);
  };

  // =====================================================
  // STATISTICS
  // =====================================================

  const publishedCount = blogs.filter(
    (blog) => blog.published
  ).length;

  const totalLikes = blogs.reduce(
    (total, blog) =>
      total + (blog.likes || 0),
    0
  );

  // =====================================================
  // CHECKING ADMIN
  // =====================================================

  if (checking) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-4xl mb-4">
            🔐
          </div>

          <p className="text-slate-400">
            Checking admin access...
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  // =====================================================
  // ADMIN DASHBOARD
  // =====================================================

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

        {/* HEADER */}

        <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              Admin Panel
            </p>

            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Blog Dashboard
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Manage your portfolio blog posts.
            </p>

          </div>

          <button
            onClick={() => navigate("/home")}
            className="w-full sm:w-auto rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-800 transition"
          >
            ← Back to Portfolio
          </button>

        </header>

        {/* MESSAGES */}

        {message && (
          <div className="mt-6 rounded-xl border border-green-800 bg-green-950/30 p-4">
            <p className="text-sm sm:text-base text-green-400">
              {message}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-xl border border-red-800 bg-red-950/30 p-4">
            <p className="text-sm sm:text-base text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* STATISTICS */}

        <section className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

          {/* TOTAL */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Total Blogs
              </p>

              <span className="text-2xl">
                📝
              </span>

            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              {blogs.length}
            </h2>

          </div>

          {/* PUBLISHED */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Published
              </p>

              <span className="text-2xl">
                ✅
              </span>

            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              {publishedCount}
            </h2>

          </div>

          {/* LIKES */}

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                Total Likes
              </p>

              <span className="text-2xl">
                ❤️
              </span>

            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              {totalLikes}
            </h2>

          </div>

        </section>

        {/* BLOG MANAGEMENT */}

        <section className="mt-8 sm:mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7 lg:p-8">

          {/* SECTION HEADER */}

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-xl sm:text-2xl font-bold">
                {editingBlog
                  ? "Edit Blog"
                  : "Blog Management"}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-slate-400">
                {editingBlog
                  ? "Update your blog post."
                  : "Create and manage your blog posts."}
              </p>

            </div>

            <button
              onClick={() => {
                if (showForm) {
                  resetForm();
                } else {
                  setShowForm(true);
                }

                setMessage("");
                setError("");
              }}
              className="w-full md:w-auto rounded-lg bg-blue-600 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-blue-700 transition"
            >
              {showForm
                ? "Close Form"
                : "+ Create New Blog"}
            </button>

          </div>

          {/* FORM */}

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-8 border-t border-slate-800 pt-8 space-y-5 sm:space-y-6"
            >

              {/* TITLE */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Blog Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm sm:text-base outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* EXCERPT */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Excerpt
                </label>

                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Short description"
                  rows="3"
                  required
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm sm:text-base outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* CONTENT */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Content
                </label>

                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your complete blog content..."
                  rows="10"
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm sm:text-base outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* IMAGE */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Image URL
                </label>

                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm sm:text-base outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* PUBLISHED */}

              <label className="flex items-center gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="h-4 w-4 shrink-0"
                />

                <span className="text-sm">
                  Publish this blog
                </span>

              </label>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                <button
                  type="submit"
                  disabled={creating}
                  className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3.5 text-sm sm:text-base font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
                >
                  {creating
                    ? "Saving..."
                    : editingBlog
                    ? "Update Blog"
                    : "Create Blog"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto rounded-lg border border-slate-700 px-6 py-3.5 text-sm sm:text-base hover:bg-slate-800 transition"
                >
                  Cancel
                </button>

              </div>

            </form>
          )}

        </section>

        {/* BLOG LIST */}

        <section className="mt-8 sm:mt-10">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-6">

            <h2 className="text-xl sm:text-2xl font-bold">
              Your Blogs
            </h2>

            {loadingBlogs && (
              <p className="text-sm text-slate-400">
                Loading...
              </p>
            )}

          </div>

          {/* EMPTY */}

          {!loadingBlogs &&
            blogs.length === 0 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-10 text-center">

                <div className="text-5xl mb-4">
                  📝
                </div>

                <h3 className="text-xl font-bold">
                  No blogs yet
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Create your first blog post.
                </p>

              </div>
            )}

          {/* BLOG GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            {blogs.map((blog) => (

              <article
                key={blog._id}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >

                {/* IMAGE */}

                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 sm:h-52 w-full object-cover"
                  />
                ) : (
                  <div className="h-48 sm:h-52 bg-slate-800 flex items-center justify-center">

                    <span className="text-5xl">
                      📝
                    </span>

                  </div>
                )}

                {/* CONTENT */}

                <div className="p-5 sm:p-6">

                  {/* TITLE + STATUS */}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                    <h3 className="text-xl font-bold leading-tight">
                      {blog.title}
                    </h3>

                    <span
                      className={`self-start shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                        blog.published
                          ? "bg-green-950 text-green-400"
                          : "bg-yellow-950 text-yellow-400"
                      }`}
                    >
                      {blog.published
                        ? "Published"
                        : "Draft"}
                    </span>

                  </div>

                  {/* EXCERPT */}

                  <p className="mt-3 text-sm sm:text-base text-slate-400 leading-6">
                    {blog.excerpt}
                  </p>

                  {/* META */}

                  <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-slate-500">

                    <span>
                      ❤️ {blog.likes || 0} likes
                    </span>

                    <span>
                      {new Date(
                        blog.createdAt
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>

                  </div>

                  {/* ACTIONS */}

                  <div className="mt-6 grid grid-cols-2 gap-3">

                    <button
                      onClick={() =>
                        handleEdit(blog)
                      }
                      className="rounded-lg border border-blue-700 px-4 py-3 text-sm font-semibold text-blue-400 hover:bg-blue-950 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(blog._id)
                      }
                      className="rounded-lg border border-red-700 px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-950 transition"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;