import { useState } from "react";
import { Link, NavLink } from "router-kit";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
    "px-4 py-2 text-white/80 hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-white/10 font-medium";
  const activeLinkClasses = "!text-indigo-400 bg-white/10";

  const mobileLinkClasses =
    "block px-4 py-3 text-white/80 hover:text-indigo-400 transition-all duration-300 rounded-lg hover:bg-white/10 font-medium";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-500/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-bold text-gradient">Router-Kit</span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              v2.0
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink
              className={linkClasses}
              activeClassName={activeLinkClasses}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={linkClasses}
              activeClassName={activeLinkClasses}
              to="/docs"
            >
              Documentation
            </NavLink>
            <NavLink
              className={linkClasses}
              activeClassName={activeLinkClasses}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={linkClasses}
              activeClassName={activeLinkClasses}
              to="/contact"
            >
              Contact
            </NavLink>
            <a
              href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/80 hover:text-indigo-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2" onClick={closeMenu}>
            <NavLink
              className={mobileLinkClasses}
              activeClassName={activeLinkClasses}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={mobileLinkClasses}
              activeClassName={activeLinkClasses}
              to="/docs"
            >
              Documentation
            </NavLink>
            <NavLink
              className={mobileLinkClasses}
              activeClassName={activeLinkClasses}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={mobileLinkClasses}
              activeClassName={activeLinkClasses}
              to="/contact"
            >
              Contact
            </NavLink>
            <a
              href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
