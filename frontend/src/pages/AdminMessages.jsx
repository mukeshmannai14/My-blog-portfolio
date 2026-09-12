import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { getIdTokenResult } from "firebase/auth";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import { auth, db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/authContext";

function AdminMessages() {
  const { user } = useAuth();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");

  const checkAdmin = async () => {
    try {
      if (!user) {
        setIsAdmin(false);
        return false;
      }

      const tokenResult = await getIdTokenResult(user);

      const admin = tokenResult.claims.admin === true;

      setIsAdmin(admin);

      return admin;
    } catch (error) {
      console.error("Admin check failed:", error);
      setIsAdmin(false);
      return false;
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");

      const admin = await checkAdmin();

      if (!admin) {
        setError("You don't have permission to view contact messages.");
        return;
      }

      const snapshot = await getDocs(
        collection(db, "contacts")
      );

      const contactMessages = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      contactMessages.sort((a, b) => {
        const dateA = a.createdAt?.toDate
          ? a.createdAt.toDate()
          : new Date(0);

        const dateB = b.createdAt?.toDate
          ? b.createdAt.toDate()
          : new Date(0);

        return dateB - dateA;
      });

      setMessages(contactMessages);
    } catch (error) {
      console.error(
        "Failed to fetch contact messages:",
        error
      );

      setError(
        "Failed to load contact messages."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMessages();
    }
  }, [user]);

  const handleDelete = async (messageId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(
        doc(db, "contacts", messageId)
      );

      setMessages((previous) =>
        previous.filter(
          (message) => message.id !== messageId
        )
      );
    } catch (error) {
      console.error(
        "Failed to delete message:",
        error
      );

      alert("Failed to delete message.");
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp?.toDate) {
      return "Date unavailable";
    }

    return timestamp.toDate().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center">
          <p className="text-slate-400">
            Loading messages...
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-4">
          <div className="w-full rounded-2xl border border-red-900 bg-slate-900 p-6 text-center sm:p-8">
            <h1 className="text-2xl font-bold text-red-400">
              Access Denied
            </h1>

            <p className="mt-3 text-slate-400">
              Only the administrator can view contact
              messages.
            </p>

            <Link
              to="/home"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
              Admin Panel
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Contact Messages
            </h1>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Messages submitted through your portfolio
              contact form.
            </p>
          </div>

          <button
            onClick={fetchMessages}
            className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-700 sm:w-auto"
          >
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm text-slate-500">
              Total Messages
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-400">
              {messages.length}
            </p>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-lg border border-red-900 bg-red-950/30 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* No messages */}
        {!error && messages.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-xl font-semibold">
              No messages yet
            </h2>

            <p className="mt-2 text-slate-400">
              Contact form submissions will appear here.
            </p>
          </div>
        )}

        {/* Messages */}
        {messages.length > 0 && (
          <div className="mt-8 space-y-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold wrap-break-word">
                      {message.subject || "No Subject"}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      {formatDate(message.createdAt)}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleDelete(message.id)
                    }
                    className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 lg:w-auto"
                  >
                    Delete
                  </button>
                </div>

                {/* User details */}
                <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-800 pt-5 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Name
                    </p>

                    <p className="mt-1 wrap-break-word text-sm text-slate-200">
                      {message.name || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm text-blue-400">
                      {message.email || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 wrap-break-word text-sm text-slate-200">
                      {message.phone || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      User Email
                    </p>

                    <p className="mt-1 break-all text-sm text-slate-300">
                      {message.userEmail || "-"}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Message
                  </p>

                  <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm leading-7 text-slate-300">
                    {message.message || "-"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminMessages;