import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Git & GitHub",
  ];

  const stats = [
    { value: "5+", label: "Projects Built" },
    { value: "8+", label: "Technologies" },
    { value: "3+", label: "Full-Stack Apps" },
    { value: "100%", label: "Passion for Development" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-800">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 py-20 lg:grid-cols-2">

              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Open to opportunities
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Full-Stack Developer
                </p>

                <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Mukesh Kanna
                  </span>
                  <span className="block text-white">
                    I build modern web applications.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  I'm a Full-Stack Developer focused on building responsive,
                  scalable and user-friendly applications using React,
                  Node.js, Express, MongoDB and Firebase.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/projects"
                    className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-semibold transition hover:bg-blue-500"
                  >
                    View My Projects →
                  </Link>

                  <Link
                    to="/contact"
                    className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-center font-semibold text-slate-200 transition hover:bg-slate-800"
                  >
                    Let's Connect
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                  <a
                    href="https://github.com/mukeshmannai14"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    GitHub ↗
                  </a>

                  <span className="text-slate-700">•</span>

                  <Link
                    to="/about"
                    className="transition hover:text-white"
                  >
                    About Me ↗
                  </Link>

                  <span className="text-slate-700">•</span>

                  <Link
                    to="/contact"
                    className="transition hover:text-white"
                  >
                    Contact ↗
                  </Link>
                </div>
              </div>

              {/* RIGHT - CODE CARD */}
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

                <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                  <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>

                    <span className="text-xs text-slate-500">
                      developer.js
                    </span>
                  </div>

                  <div className="mt-7 font-mono text-sm leading-8 sm:text-base">
                    <p>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">developer</span> = {"{"}
                    </p>

                    <p className="pl-6">
                      <span className="text-slate-300">name:</span>{" "}
                      <span className="text-emerald-400">
                        "Mukesh Kanna"
                      </span>
                      ,
                    </p>

                    <p className="pl-6">
                      <span className="text-slate-300">role:</span>{" "}
                      <span className="text-emerald-400">
                        "Full-Stack Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-6">
                      <span className="text-slate-300">frontend:</span>{" "}
                      <span className="text-emerald-400">
                        "React"
                      </span>
                      ,
                    </p>

                    <p className="pl-6">
                      <span className="text-slate-300">backend:</span>{" "}
                      <span className="text-emerald-400">
                        "Node.js"
                      </span>
                      ,
                    </p>

                    <p className="pl-6">
                      <span className="text-slate-300">database:</span>{" "}
                      <span className="text-emerald-400">
                        "MongoDB"
                      </span>
                      ,
                    </p>

                    <p className="pl-6">
                      <span className="text-slate-300">focus:</span>{" "}
                      <span className="text-emerald-400">
                        "Building"
                      </span>
                    </p>

                    <p>{"};"}</p>
                  </div>

                  <div className="mt-7 rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Current status
                      </span>

                      <span className="flex items-center gap-2 text-xs text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-slate-800 bg-slate-900/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <h2 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  About Me
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Building digital experiences with{" "}
                  <span className="text-blue-500">
                    purpose.
                  </span>
                </h2>
              </div>

              <div>
                <p className="leading-8 text-slate-400">
                  I enjoy transforming ideas into practical web applications.
                  From creating responsive React interfaces to developing
                  secure backend APIs and database systems, I like working
                  across the complete development lifecycle.
                </p>

                <Link
                  to="/about"
                  className="mt-6 inline-block font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Learn more about me →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="border-y border-slate-800 bg-slate-900/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                My Toolkit
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Technologies I Work With
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Technologies and tools I use to build modern full-stack
                applications.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center transition hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <span className="font-semibold text-slate-200">
                    {technology}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/skills"
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                Explore my skills →
              </Link>
            </div>

          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Featured Work
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  My Featured Project
                </h2>
              </div>

              <Link
                to="/projects"
                className="font-semibold text-blue-400 hover:text-blue-300"
              >
                View all projects →
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">

              <div className="grid lg:grid-cols-2">

                <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-blue-600/20 via-slate-950 to-purple-600/20 p-8">

                  <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-2xl">

                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <span className="font-semibold">
                        Blog Portfolio
                      </span>

                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                        Featured
                      </span>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="h-3 w-3/4 rounded bg-slate-800" />
                      <div className="h-3 w-full rounded bg-slate-800" />
                      <div className="h-3 w-5/6 rounded bg-slate-800" />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["React", "Node.js", "MongoDB", "Firebase"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-blue-500/10 px-2 py-1 text-xs text-blue-400"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-sm font-medium text-blue-400">
                    Full-Stack Application
                  </p>

                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Developer Blog Portfolio
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    A complete portfolio and blog platform with Firebase
                    authentication, admin authorization, MongoDB blog
                    management, likes and Firestore-powered contact messages.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "React",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Firebase",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/projects"
                    className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
                  >
                    Explore Project →
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-800 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Connect
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Let's build something meaningful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Interested in working together, discussing a project, or simply
              connecting with a developer? I'd love to hear from you.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-3.5 font-semibold transition hover:bg-blue-500"
            >
              Get In Touch →
            </Link>

          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;