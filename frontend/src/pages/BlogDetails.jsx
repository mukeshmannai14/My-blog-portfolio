import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import { auth } from "../firebase/firebaseConfig";
import { useAuth } from "../context/authContext";

function BlogDetails() {
  const { id } = useParams();
  const { user } = useAuth();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [liking, setLiking] = useState(false);

  // =====================================================
  // FETCH SINGLE BLOG
  // =====================================================

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );

        setBlog(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch blog:",
          error
        );

        setError(
          error.response?.data?.message ||
            "Failed to load blog."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // =====================================================
  // LIKE / UNLIKE
  // =====================================================

  const handleLike = async () => {
    try {
      if (!user) {
        setError(
          "Please login to like this blog."
        );
        return;
      }

      const currentUser = auth.currentUser;

      if (!currentUser) {
        setError("Please login again.");
        return;
      }

      setLiking(true);
      setError("");

      const token =
        await currentUser.getIdToken();

      const response = await axios.post(
        `http://localhost:5000/api/blogs/${id}/like`,
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
              currentUser.uid,
            ]
          : (currentBlog.likedBy || []).filter(
              (userId) =>
                userId !== currentUser.uid
            ),
      }));
    } catch (error) {
      console.error(
        "Like error:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to update like."
      );
    } finally {
      setLiking(false);
    }
  };

  // =====================================================
  // LOADING STATE
  // =====================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">

        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

          <div className="min-h-[50vh] flex items-center justify-center">

            <div className="text-center">

              <div className="text-5xl mb-5">
                📝
              </div>

              <p className="text-base sm:text-lg text-slate-400">
                Loading blog...
              </p>

            </div>

          </div>

        </main>

      </div>
    );
  }

  // =====================================================
  // BLOG NOT FOUND
  // =====================================================

  if (error && !blog) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">

        <Navbar />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

          <div className="rounded-2xl border border-red-800 bg-red-950/30 p-6 sm:p-10 text-center">

            <div className="text-5xl mb-5">
              ❌
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold">
              Blog not found
            </h1>

            <p className="mt-3 text-sm sm:text-base text-red-400">
              {error}
            </p>

            <Link
              to="/blog"
              className="inline-block mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-blue-700 transition"
            >
              ← Back to Blogs
            </Link>

          </div>

        </main>

      </div>
    );
  }

  // =====================================================
  // CHECK LIKE
  // =====================================================

  const hasLiked =
    user &&
    blog?.likedBy?.includes(user.uid);

  // =====================================================
  // BLOG DETAILS
  // =====================================================

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* =================================================
            BACK BUTTON
        ================================================= */}

        <Link
          to="/blog"
          className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition mb-7 sm:mb-10"
        >
          ← Back to Blogs
        </Link>

        {/* =================================================
            ARTICLE
        ================================================= */}

        <article>

          {/* =================================================
              IMAGE
          ================================================= */}

          {blog.image && (
            <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800">

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 sm:h-72 md:h-96 lg:max-h-125 object-cover"
              />

            </div>
          )}

          {/* =================================================
              TITLE
          ================================================= */}

          <h1 className="mt-7 sm:mt-10 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight wrap-break-word">
            {blog.title}
          </h1>

          {/* =================================================
              METADATA
          ================================================= */}

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-slate-500">

            <span>
              By{" "}
              <span className="text-slate-300">
                {blog.author}
              </span>
            </span>

            <span className="hidden sm:inline">
              •
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

            <span className="hidden sm:inline">
              •
            </span>

            <span>
              ❤️ {blog.likes || 0} likes
            </span>

          </div>

          {/* =================================================
              EXCERPT
          ================================================= */}

          <div className="mt-7 sm:mt-8 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6 lg:p-7">

            <p className="text-base sm:text-lg text-slate-300 leading-7 sm:leading-8">
              {blog.excerpt}
            </p>

          </div>

          {/* =================================================
              BLOG CONTENT
          ================================================= */}

          <div className="mt-8 sm:mt-10">

            {blog.content
              ?.split("\n")
              .map((paragraph, index) => {

                if (!paragraph.trim()) {
                  return (
                    <div
                      key={index}
                      className="h-3 sm:h-4"
                    />
                  );
                }

                return (
                  <p
                    key={index}
                    className="mb-5 sm:mb-6 text-base sm:text-lg text-slate-300 leading-7 sm:leading-8 wrap-break-word"
                  >
                    {paragraph}
                  </p>
                );
              })}

          </div>

          {/* =================================================
              LIKE SECTION
          ================================================= */}

          <div className="mt-10 sm:mt-12 border-t border-slate-800 pt-7 sm:pt-8">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div>

                <p className="text-sm text-slate-500">
                  Enjoyed this article?
                </p>

                <p className="mt-1 text-sm sm:text-base text-slate-400">
                  Show your support by liking it.
                </p>

              </div>

              <button
                onClick={handleLike}
                disabled={liking}
                className={`w-full sm:w-auto rounded-lg px-6 py-3 text-sm sm:text-base font-semibold transition ${
                  hasLiked
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {liking
                  ? "Updating..."
                  : hasLiked
                  ? `❤️ Liked ${blog.likes || 0}`
                  : `🤍 Like ${blog.likes || 0}`}
              </button>

            </div>

            {/* ERROR */}

            {error && (
              <p className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}

          </div>

          {/* =================================================
              BACK TO BLOGS
          ================================================= */}

          <div className="mt-8 sm:mt-10">

            <Link
              to="/blog"
              className="block w-full sm:w-auto rounded-lg border border-slate-700 px-5 py-3 text-center text-sm sm:text-base font-semibold text-slate-300 hover:bg-slate-800 hover:border-blue-500 hover:text-blue-400 transition"
            >
              ← Back to All Blogs
            </Link>

          </div>

        </article>

      </main>

    </div>
  );
}

export default BlogDetails;