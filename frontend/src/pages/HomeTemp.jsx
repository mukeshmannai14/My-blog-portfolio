import Navbar from "../components/Navbar";
import { useAuth } from "../context/authContext";

function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <section className="min-h-[calc(100vh-80px)] flex items-center py-16 sm:py-20 lg:py-24">

          <div className="w-full max-w-4xl">

            {/* SMALL TITLE */}

            <p className="text-blue-400 text-sm sm:text-base font-medium tracking-wider uppercase">
              Full-Stack Developer
            </p>

            {/* MAIN HEADING */}

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

              Hi, I'm a{" "}

              <span className="text-blue-500">
                Full-Stack Developer.
              </span>

            </h1>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-400 leading-7 sm:leading-8">

              I build modern, scalable web applications
              using React, Node.js, Express, MongoDB
              and Firebase.

            </p>

            {/* BUTTONS */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="/projects"
                className="w-full sm:w-auto text-center rounded-lg bg-blue-600 px-6 py-3.5 font-semibold hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="w-full sm:w-auto text-center rounded-lg border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 hover:bg-slate-800 transition"
              >
                Contact Me
              </a>

            </div>

            {/* USER INFORMATION */}

            {user && (
              <div className="mt-10 sm:mt-12 rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6 max-w-lg">

                <p className="text-xs sm:text-sm text-slate-500">
                  Logged in as
                </p>

                <p className="mt-2 text-sm sm:text-base text-blue-400 break-all">
                  {user.email}
                </p>

              </div>
            )}

            {/* TECHNOLOGY STACK */}

            <div className="mt-12 sm:mt-16">

              <p className="text-sm text-slate-500 mb-4">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">

                <span className="rounded-full border border-slate-800 bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300">
                  React
                </span>

                <span className="rounded-full border border-slate-800 bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300">
                  Node.js
                </span>

                <span className="rounded-full border border-slate-800 bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300">
                  Express
                </span>

                <span className="rounded-full border border-slate-800 bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300">
                  MongoDB
                </span>

                <span className="rounded-full border border-slate-800 bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300">
                  Firebase
                </span>

                <span className="rounded-full border border-slate-800 bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-300">
                  JavaScript
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;