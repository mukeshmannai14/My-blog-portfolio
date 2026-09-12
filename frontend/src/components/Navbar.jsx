import { useEffect, useState } from "react";
import {
  getIdTokenResult,
  signOut,
} from "firebase/auth";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { auth } from "../firebase/firebaseConfig";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // =====================================================
  // CHECK ADMIN
  // =====================================================

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        if (!user) {
          setIsAdmin(false);
          return;
        }

        const tokenResult =
          await getIdTokenResult(user);

        setIsAdmin(
          tokenResult.claims.admin === true
        );
      } catch (error) {
        console.error(
          "Admin check failed:",
          error
        );

        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, [user]);

  // =====================================================
  // CLOSE MOBILE MENU WHEN ROUTE CHANGES
  // =====================================================

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {
    try {
      await signOut(auth);

      setMenuOpen(false);

      navigate("/login");
    } catch (error) {
      console.error(
        "Logout failed:",
        error
      );
    }
  };

  // =====================================================
  // NAVIGATION LINKS
  // =====================================================

  const navLinks = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  // =====================================================
  // ACTIVE LINK
  // =====================================================

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            DESKTOP + MOBILE HEADER
        ================================================= */}

        <div className="h-16 sm:h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/home"
            className="text-xl sm:text-2xl font-bold text-white shrink-0"
          >
            My
            <span className="text-blue-500">
              Portfolio
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition ${
                  isActive(link.path)
                    ? "text-blue-400 font-semibold"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* ADMIN */}

            {isAdmin && (
              <Link
                to="/admin"
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  isActive("/admin")
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Admin
              </Link>
            )}

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
            >
              Logout
            </button>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <span className="text-2xl">
                ×
              </span>
            ) : (
              <span className="text-2xl">
                ☰
              </span>
            )}
          </button>

        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {menuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-4">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-lg px-4 py-3 text-sm transition ${
                    isActive(link.path)
                      ? "bg-blue-600/10 text-blue-400 font-semibold"
                      : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* ADMIN */}

              {isAdmin && (
                <Link
                  to="/admin"
                  className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                  Admin Dashboard
                </Link>
              )}

              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="mt-2 w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                Logout
              </button>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;