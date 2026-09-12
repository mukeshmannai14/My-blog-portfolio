import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { auth } from "../firebase/firebaseConfig";

const API_URL = import.meta.env.VITE_API_URL;

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // FETCH BLOG
  // =====================================================

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_URL}/api/blogs/${id}`
      );

      setBlog(response.data);
    } catch (error) {
      console.error("Failed to fetch blog:", error);

      setError(
        error.response?.data?.message ||
          "Failed to load blog."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  // =====================================================
  // LIKE BLOG
  // =====================================================

  const handleLike = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login");
        return;
      }

      const token = await user.getIdToken();

      const response = await axios.post(
        `${API_URL}/api/blogs/${id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlog((currentBlog) => ({
        ...currentBlog,
        likes: response.data.likes,
        likedBy: response.data.liked
          ? [
              ...(currentBlog.likedBy || []),
              user.uid,
            ]
          : (currentBlog.likedBy || []).filter(
              (userId) => userId !== user.uid
            ),
      }));
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
              📖
            </div>

            <p className="text-slate-400">
              Loading blog...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

            <div className="text-5xl mb-4">
              😕
            </div>

            <h1 className="text-2xl font-bold">
              Blog Not Found
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              {error ||
                "The blog you are looking for does not exist."}
            </p>

            <button
              onClick={() => navigate("/blog")}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              ← Back to Blogs
            </button>

          </div>
        </main>
      </div>
    );
  }

  // =====================================================
  // CHECK LIKE
  // =====================================================

  const user = auth.currentUser;

  const liked = user
    ? (blog.likedBy || []).includes(user.uid)
    : false;

  // =====================================================
  // BLOG DETAILS
  // =====================================================

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        {/* BACK BUTTON */}

        <button
          onClick={() => navigate("/blog")}
          className="mb-8 text-sm font-medium text-slate-400 hover:text-blue-400 transition"
        >
          ← Back to Blogs
        </button>

        {/* BLOG */}

        <article>

          {/* IMAGE */}

          {blog.image && (
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover sm:h-72 md:h-96"
              />
            </div>
          )}

          {/* HEADER */}

          <header className="mt-8">

            <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
              Blog Article
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>

            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

              <span>
                By {blog.author}
              </span>

              <span>
                {new Date(
                  blog.createdAt
                ).toLocaleDateString(
                  "en-IN",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </span>

            </div>

          </header>

          {/* LIKE */}

          <div className="mt-8 flex items-center gap-4 border-y border-slate-800 py-5">

            <button
              onClick={handleLike}
              className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                liked
                  ? "border-red-700 bg-red-950 text-red-400"
                  : "border-slate-700 text-slate-300 hover:border-red-700 hover:text-red-400"
              }`}
            >
              {liked ? "❤️ Liked" : "🤍 Like"}
            </button>

            <span className="text-sm text-slate-400">
              {blog.likes || 0}{" "}
              {blog.likes === 1
                ? "Like"
                : "Likes"}
            </span>

          </div>

          {/* CONTENT */}

          <div className="mt-8">

            <p className="whitespace-pre-wrap wrap-break-word text-base leading-8 text-slate-300 sm:text-lg">
              {blog.content}
            </p>

          </div>

        </article>

      </main>
    </div>
  );
}

export default BlogDetails;