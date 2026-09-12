import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import Navbar from "../components/Navbar";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/authContext";

function Contact() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!user) {
      setError("Please login before sending a message.");
      return;
    }

    try {
      setLoading(true);

      const contactData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),

        userId: user.uid,
        userEmail: user.email,

        createdAt: serverTimestamp(),
      };

      console.log("Sending contact data:", contactData);

      const docRef = await addDoc(
        collection(db, "contacts"),
        contactData
      );

      console.log(
        "Contact message saved successfully:",
        docRef.id
      );

      setSuccess(
        "Your message has been sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setError(
        error.message ||
          "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
              Get In Touch
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Contact Me
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Have a project idea or want to work together?
              Send me a message.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            {/* Success */}
            {success && (
              <div className="mt-5 rounded-lg border border-green-800 bg-green-950/30 px-4 py-3 text-sm text-green-400">
                {success}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="mt-5 rounded-lg border border-red-800 bg-red-950/30 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;