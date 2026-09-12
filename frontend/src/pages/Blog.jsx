import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { auth } from "../firebase/firebaseConfig";
import { useAuth } from "../context/authContext";

function Blog() {
  const { user } = useAuth();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [likingBlog, setLikingBlog] = useState(null);

  // =====================================================
  // FETCH BLOGS
  // =====================================================

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "http://localhost:5000/api/blogs"
        );

        setBlogs(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch blogs:",
          error
        );

        setError(
          error.response?.data?.message ||
            "Failed to load blogs."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // =====================================================
  // LIKE / UNLIKE
  // =====================================================

  const handleLike = async (blogId) => {
    try {
      if (!user) {
        setError("Please login to like a blog.");
        return;
      }

      setLikingBlog(blogId);
      setError("");

      const currentUser = auth.currentUser;

      if (!currentUser) {
        setError("Please login again.");
        return;
      }

      const token = await currentUser.getIdToken();

      const response = await axios.post(
        `http://localhost:5000/api/blogs/${blogId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlogs((currentBlogs) =>
        currentBlogs.map((blog) => {
          if (blog._id !== blogId) {
            return blog;
          }

          return {
            ...blog,
            likes: response.data.likes,
            likedBy: response.data.liked
              ? [
                  ...(blog.likedBy || []),
                  currentUser.uid,
                ]
              : (blog.likedBy || []).filter(
                  (id) => id !== currentUser.uid
                ),
          };
        })
      );
    } catch (error) {
      console.error(
        "Like request failed:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to update like."
      );
    } finally {
      setLikingBlog(null);
    }
  };

  // =====================================================
  // CHECK IF USER LIKED
  // =====================================================

  const hasLiked = (blog) => {
    if (!user) {
      return false;
    }

    return blog.likedBy?.includes(user.uid);
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

          <div className="flex min-h-[50vh] items-center justify-center">

            <div className="text-center">

              <div className="text-5xl sm:text-6xl mb-5">
                📝
              </div>

              <p className="text-base sm:text-lg text-slate-400">
                Loading blogs...
              </p>

            </div>

          </div>

        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* =================================================
            HEADER
        ================================================= */}

        <section className="max-w-3xl">

          <p className="text-blue-400 text-sm sm:text-base font-medium uppercase tracking-wider">
            My Blog
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Thoughts, tutorials and{" "}
            <span className="text-blue-500">
              development insights.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-400 leading-7 sm:leading-8">
            I write about web development, JavaScript,
            React, backend development and things I learn
            while building real-world applications.
          </p>

        </section>

        {/* =================================================
            ERROR
        ================================================= */}

        {error && (
          <div className="mt-8 rounded-xl border border-red-800 bg-red-950/30 p-4">

            <p className="text-sm sm:text-base text-red-400">
              {error}
            </p>

          </div>
        )}

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {!error && blogs.length === 0 && (
          <div className="mt-12 sm:mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10 lg:p-16 text-center">

            <div className="text-5xl sm:text-6xl mb-5">
              📝
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold">
              Blogs coming soon
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400">
              Blog posts will appear here once they are
              published.
            </p>

          </div>
        )}

        {/* =================================================
            BLOG GRID
        ================================================= */}

        {blogs.length > 0 && (
          <section className="mt-10 sm:mt-14 lg:mt-16">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

              {blogs.map((blog) => (

                <article
                  key={blog._id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 hover:border-blue-500/50 transition duration-300"
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <Link
                    to={`/blog/${blog._id}`}
                    className="block overflow-hidden"
                  >

                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-48 sm:h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-48 sm:h-52 bg-slate-800 flex items-center justify-center">

                        <span className="text-5xl">
                          📝
                        </span>

                      </div>
                    )}

                  </Link>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    {/* TITLE */}

                    <Link
                      to={`/blog/${blog._id}`}
                      className="block"
                    >

                      <h2 className="text-xl sm:text-2xl font-bold leading-tight hover:text-blue-400 transition">
                        {blog.title}
                      </h2>

                    </Link>

                    {/* EXCERPT */}

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 leading-6 sm:leading-7 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* =================================================
                        AUTHOR + DATE
                    ================================================= */}

                    <div className="mt-5 sm:mt-6 border-t border-slate-800 pt-4 sm:pt-5">

                      <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                          <p className="text-xs sm:text-sm text-slate-500">
                            Written by
                          </p>

                          <p className="mt-1 text-xs sm:text-sm font-medium text-slate-300 break-all">
                            {blog.author}
                          </p>

                        </div>

                        <div className="shrink-0 text-right">

                          <p className="text-xs sm:text-sm text-slate-500">
                            Published
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
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
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        BUTTONS
                    ================================================= */}

                    <div className="mt-5 sm:mt-6 space-y-3">

                      {/* LIKE */}

                      <button
                        onClick={() =>
                          handleLike(blog._id)
                        }
                        disabled={
                          likingBlog === blog._id
                        }
                        className={`w-full rounded-lg px-4 py-3 text-sm sm:text-base font-semibold transition ${
                          hasLiked(blog)
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                      >

                        {likingBlog === blog._id ? (
                          "Updating..."
                        ) : hasLiked(blog) ? (
                          <>
                            ❤️ Liked{" "}
                            {blog.likes || 0}
                          </>
                        ) : (
                          <>
                            🤍 Like{" "}
                            {blog.likes || 0}
                          </>
                        )}

                      </button>

                      {/* READ MORE */}

                      <Link
                        to={`/blog/${blog._id}`}
                        className="block w-full rounded-lg border border-slate-700 px-4 py-3 text-center text-sm sm:text-base font-semibold text-blue-400 hover:bg-slate-800 hover:border-blue-500 transition"
                      >
                        Read More →
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </section>
        )}

      </main>

    </div>
  );
}

export default Blog;