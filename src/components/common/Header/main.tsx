import { Link, NavLink } from "router-kit";

const MainHeader = () => {
  const linkClasses =
    "px-4 py-2 text-white/80 hover:text-accent-300 transition-all duration-300 rounded-lg hover:bg-white/10 font-medium";
  const activeLinkClasses = "!text-accent-300 bg-white/10";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-500/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <span className="text-2xl font-bold text-gradient">Router-Kit</span>
          </Link>

          <div className="flex items-center space-x-2">
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
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
