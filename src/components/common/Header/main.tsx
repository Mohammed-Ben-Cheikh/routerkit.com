import { useState } from "react";
import { Link, NavLink } from "router-kit";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
    "px-4 py-2 text-white/80 hover:text-accent-300 transition-all duration-300 rounded-lg hover:bg-white/10 font-medium";
  const activeLinkClasses = "!text-accent-300 bg-white/10";

  const mobileLinkClasses =
    "block px-4 py-3 text-white/80 hover:text-accent-300 transition-all duration-300 rounded-lg hover:bg-white/10 font-medium";

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
              className="ml-4 px-4 py-2 bg-gradient-blue text-primary-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/80 hover:text-accent-300 transition-colors"
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
              className="block mx-4 mt-4 px-4 py-2 bg-gradient-blue text-primary-500 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300"
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
