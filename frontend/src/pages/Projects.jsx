import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const GITHUB_USERNAME = "mukeshmannai14";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`
        );

        if (!response.ok) {
          throw new Error("Unable to load GitHub repositories.");
        }

        const data = await response.json();

        const projects = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );

        setRepos(projects);
      } catch (err) {
        console.error("GitHub API error:", err);
        setError(
          "Unable to load projects from GitHub. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getCategory = (repo) => {
    const text = `
      ${repo.name}
      ${repo.description || ""}
      ${(repo.topics || []).join(" ")}
      ${repo.language || ""}
    `.toLowerCase();

    const hasFrontend =
      /react|vite|html|css|tailwind|javascript|frontend|front-end|jsx/.test(
        text
      );

    const hasBackend =
      /node|express|mongodb|mongoose|firebase|api|backend|back-end|server/.test(
        text
      );

    if (hasFrontend && hasBackend) {
      return "Full Stack";
    }

    if (hasBackend) {
      return "Backend";
    }

    if (hasFrontend) {
      return "Frontend";
    }

    return "Other";
  };

  const categorizedRepos = useMemo(() => {
    return repos.map((repo) => ({
      ...repo,
      category: getCategory(repo),
      featured:
        repo.name.toLowerCase() === "my-blog-portfolio" ||
        repo.name.toLowerCase() === "bulkmail-app",
    }));
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (activeFilter === "All") {
      return categorizedRepos;
    }

    return categorizedRepos.filter(
      (repo) => repo.category === activeFilter
    );
  }, [categorizedRepos, activeFilter]);

  const featuredProjects = categorizedRepos.filter(
    (repo) => repo.featured
  );

  const fullStackCount = categorizedRepos.filter(
    (repo) => repo.category === "Full Stack"
  ).length;

  const languageCount = new Set(
    categorizedRepos
      .map((repo) => repo.language)
      .filter(Boolean)
  ).size;

  const formatName = (name) => {
    return name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getTopics = (repo) => {
    if (repo.topics && repo.topics.length > 0) {
      return repo.topics.slice(0, 5);
    }

    if (repo.language) {
      return [repo.language];
    }

    return ["Web Development"];
  };

  const filters = ["All", "Full Stack", "Frontend", "Backend", "Other"];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              My Work
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Projects Built With{" "}
              <span className="text-blue-500">Purpose.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
              A collection of applications and experiments I've built while
              developing my skills in React, Node.js, Express, MongoDB,
              Firebase, and modern web technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View GitHub
              </a>

              <Link
                to="/contact"
                className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
              >
                Let's Work Together
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-r border-slate-800 p-6 sm:p-8 lg:border-b-0">
            <p className="text-3xl sm:text-4xl font-bold text-white">
              {loading ? "—" : categorizedRepos.length}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Public Projects
            </p>
          </div>

          <div className="border-b border-slate-800 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-3xl sm:text-4xl font-bold text-white">
              {loading ? "—" : fullStackCount}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Full-Stack Projects
            </p>
          </div>

          <div className="border-r border-slate-800 p-6 sm:p-8">
            <p className="text-3xl sm:text-4xl font-bold text-white">
              {loading ? "—" : languageCount}
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Technologies
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-3xl sm:text-4xl font-bold text-white">
              MERN
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Primary Stack
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      {!loading && featuredProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Featured
            </p>

            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              Projects I'm Most Proud Of
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((repo) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                featured
                formatName={formatName}
                formatDate={formatDate}
                getTopics={getTopics}
              />
            ))}
          </div>
        </section>
      )}

      {/* ================= ALL PROJECTS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Portfolio
            </p>

            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              All Projects
            </h2>

            <p className="mt-3 text-slate-400">
              Explore my latest work directly from GitHub.
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500 hover:text-blue-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-2xl border border-slate-800 bg-slate-900"
              />
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-900/50 bg-red-950/20 p-8 text-center">
            <p className="text-lg font-semibold text-red-400">
              Something went wrong
            </p>

            <p className="mt-2 text-sm text-slate-400">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-5 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* PROJECT GRID */}
        {!loading && !error && filteredRepos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                formatName={formatName}
                formatDate={formatDate}
                getTopics={getTopics}
              />
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!loading && !error && filteredRepos.length === 0 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-12 text-center">
            <p className="text-xl font-semibold">
              No projects found
            </p>

            <p className="mt-2 text-slate-400">
              Try selecting another category.
            </p>
          </div>
        )}
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Let's Build Something
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Have an idea in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-7">
            I'm interested in building practical, scalable and user-friendly
            web applications. Let's turn an idea into a real product.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Contact Me
            </Link>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-slate-200 hover:border-blue-500 hover:text-blue-400 transition"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  repo,
  featured = false,
  formatName,
  formatDate,
  getTopics,
}) {
  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-950/30 ${
        featured
          ? "border-blue-500/40"
          : "border-slate-800"
      }`}
    >
      {featured && (
        <div className="absolute right-5 top-5 rounded-full bg-blue-600/15 px-3 py-1 text-xs font-semibold text-blue-400">
          Featured
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-xl">
          💻
        </div>

        {!featured && (
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
            {repo.category}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold text-white group-hover:text-blue-400 transition">
        {formatName(repo.name)}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
        {repo.description ||
          "A web development project built as part of my full-stack development journey."}
      </p>

      {/* TECHNOLOGIES */}
      <div className="mt-5 flex flex-wrap gap-2">
        {getTopics(repo).map((topic) => (
          <span
            key={topic}
            className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* STATS */}
      <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-slate-800 pt-5 text-xs text-slate-400">
        {repo.language && (
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            {repo.language}
          </span>
        )}

        <span>⭐ {repo.stargazers_count}</span>

        <span>⑂ {repo.forks_count}</span>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Updated {formatDate(repo.updated_at)}
      </p>

      {/* ACTIONS */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View GitHub
        </a>

        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-lg border border-slate-700 px-4 py-2.5 text-center text-sm font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default Projects;