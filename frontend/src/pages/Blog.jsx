import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

import Navbar from "../components/Navbar";

const API_URL = import.meta.env.VITE_API_URL;

function Blog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // FETCH BLOGS
  // =====================================================

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_URL}/api/blogs`
      );

      setBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);

      setError(
        error.response?.data?.message ||
          "Failed to load blogs. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // =====================================================
  // LIKE BLOG
  // =====================================================

  const handleLike = async (blogId) => {
    try {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const token = await user.getIdToken();

      const response = await axios.post(
        `${API_URL}/api/blogs/${blogId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogs((currentBlogs) =>
        currentBlogs.map((blog) =>
          blog._id === blogId
            ? {
                ...blog,
                likes: response.data.likes,
                likedBy: response.data.liked
                  ? [...(blog.likedBy || []), user.uid]
                  : (blog.likedBy || []).filter(
                      (id) => id !== user.uid
                    ),
              }
            : blog
        )
      );
    } catch (error) {
      console.error("Like error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to update like."
      );
    }
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">
            <div className="text-4xl mb-4">
              📝
            </div>

            <p className="text-slate-400">
              Loading blogs...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // BLOG PAGE
  // =====================================================

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        {/* HEADER */}

        <section className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
            My Blog
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Latest Articles
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I write about web development, React, Node.js,
            MongoDB, JavaScript and my learning journey.
          </p>
        </section>

        {/* ERROR */}

        {error && (
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-red-800 bg-red-950/30 p-4 text-center">
            <p className="text-sm text-red-400">
              {error}
            </p>

            <button
              onClick={fetchBlogs}
              className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY */}

        {!error && blogs.length === 0 && (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center sm:p-10">
            <div className="text-5xl mb-4">
              📝
            </div>

            <h2 className="text-xl font-bold">
              No blogs available
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Check back later for new articles.
            </p>
          </div>
        )}

        {/* BLOG GRID */}

        {blogs.length > 0 && (
          <section className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => {
              const user = auth.currentUser;

              const liked = user
                ? (blog.likedBy || []).includes(user.uid)
                : false;

              return (
                <article
                  key={blog._id}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-slate-700"
                >

                  {/* IMAGE */}

                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-48 w-full items-center justify-center bg-slate-800">
                      <span className="text-5xl">
                        📝
                      </span>
                    </div>
                  )}

                  {/* CONTENT */}

                  <div className="p-5 sm:p-6">

                    <h2 className="text-xl font-bold leading-tight">
                      {blog.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {blog.excerpt}
                    </p>

                    {/* META */}

                    <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                      <span>
                        {blog.author}
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

                    <div className="mt-6 flex items-center justify-between gap-3">

                      <button
                        onClick={() =>
                          navigate(
                            `/blog/${blog._id}`
                          )
                        }
                        className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
                      >
                        Read More
                      </button>

                      <button
                        onClick={() =>
                          handleLike(blog._id)
                        }
                        className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                          liked
                            ? "border-red-700 bg-red-950 text-red-400"
                            : "border-slate-700 text-slate-300 hover:border-red-700 hover:text-red-400"
                        }`}
                      >
                        {liked ? "❤️" : "🤍"}{" "}
                        {blog.likes || 0}
                      </button>

                    </div>

                  </div>
                </article>
              );
            })}

          </section>
        )}

      </main>
    </div>
  );
}

export default Blog;