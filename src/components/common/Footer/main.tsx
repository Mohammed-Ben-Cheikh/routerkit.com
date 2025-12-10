import { Link } from "router-kit";

const MainFooter = () => {
  return (
    <footer className="bg-primary-500 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-3 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-gradient">
                Router-Kit
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                v2.0
              </span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 max-w-md">
              A lightweight, type-safe routing library for React with React
              Router-like API. Features SSR, route guards, data loaders,
              navigation blocking, and more.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.npmjs.com/package/router-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-indigo-400 transition-colors"
                aria-label="NPM"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/router-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  NPM Package
                </a>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-sm text-white/70 hover:text-indigo-400 transition-colors"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-xs sm:text-sm text-center text-white/60">
          <p className="px-4">
            © {new Date().getFullYear()} Router-Kit by{" "}
            <a
              href="https://mohammedbencheikh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              Mohammed Ben Cheikh
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
