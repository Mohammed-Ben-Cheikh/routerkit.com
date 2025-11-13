import { Helmet } from "react-helmet-async";
import { Link } from "router-kit";
import MainLayout from "../../components/common/Layout/main";
import CodeBlock from "../../components/ui/CodeBlock";

const Home = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>
          Router-Kit - Lightweight React Routing Library | Fast & Simple
          Navigation
        </title>
        <meta
          name="description"
          content="Router-Kit is a lightweight, minimal, and powerful client-side routing library for React applications. Easy to use, TypeScript support, and blazing fast performance. Perfect alternative to React Router."
        />
        <link rel="canonical" href="https://routerkit.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://routerkit.com/" />
        <meta
          property="og:title"
          content="Router-Kit - Lightweight React Routing Library | Fast & Simple Navigation"
        />
        <meta
          property="og:description"
          content="Router-Kit is a lightweight, minimal, and powerful client-side routing library for React applications. Easy to use, TypeScript support, and blazing fast performance."
        />
        <meta property="og:image" content="https://routerkit.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://routerkit.com/" />
        <meta
          name="twitter:title"
          content="Router-Kit - Lightweight React Routing Library"
        />
        <meta
          name="twitter:description"
          content="A lightweight, minimal, and powerful client-side routing library for React applications. Easy to use with TypeScript support."
        />
        <meta name="twitter:image" content="https://routerkit.com/logo.png" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-blue opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-gradient">Router-Kit</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              A lightweight, minimal, and powerful client-side routing library
              for React applications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/docs"
                className="px-8 py-4 bg-gradient-blue text-primary-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                View on GitHub
              </a>
            </div>

            {/* Code Preview */}
            <div className="max-w-3xl mx-auto bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white/5 border-b border-white/10">
                <span className="text-sm font-medium text-white/80">
                  Installation
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <CodeBlock
                  code="npm install router-kit"
                  language="bash"
                  showLineNumbers={false}
                />
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-md text-xs font-medium text-white/70">
                    NPM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-md text-xs font-medium text-green-400">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    TypeScript Ready
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 rounded-md text-xs font-medium text-blue-400">
                    v1.3.2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-gradient">
            Why Router-Kit?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightweight",
                description:
                  "Minimal dependencies - only React, React-DOM, and url-join. Keep your bundle size small.",
              },
              {
                icon: "🎯",
                title: "Simple API",
                description:
                  "Easy to learn and use with intuitive components and hooks. Get started in minutes.",
              },
              {
                icon: "🔒",
                title: "Type-Safe",
                description:
                  "Full TypeScript support with comprehensive type definitions for better developer experience.",
              },
              {
                icon: "🔄",
                title: "Dynamic Routes",
                description:
                  "Support for route parameters, query strings, and dynamic component rendering.",
              },
              {
                icon: "🌳",
                title: "Nested Routes",
                description:
                  "Build complex route hierarchies with nested route configurations.",
              },
              {
                icon: "🎨",
                title: "Custom 404",
                description:
                  "Easy configuration for custom 404 pages with built-in fallback support.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 hover-lift"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-accent-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-gradient">
            Quick Example
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent-300">
                Define Your Routes
              </h3>
              <CodeBlock
                language="tsx"
                showLineNumbers={true}
                code={`import { createRouter } from "router-kit";

    const routes = createRouter([
      { 
        path: "/", 
        component: <Home /> 
      },
      { 
        path: "about", 
        component: <About /> 
      },
      { 
        path: "users/:id", 
        component: <UserProfile /> 
      },
    ]);`}
              />
            </div>

            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent-300">
                Use the Router
              </h3>
              <CodeBlock
                language="tsx"
                showLineNumbers={true}
                code={`import { RouterProvider } from "router-kit";

    function App() {
      return (
        <RouterProvider routes={routes} />
      );
    }

    export default App;`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "1.3.1", label: "Current Version" },
              { number: "< 5KB", label: "Bundle Size" },
              { number: "100%", label: "TypeScript" },
              { number: "MIT", label: "License" },
            ].map((stat, index) => (
              <div key={index} className="p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author / Profile Card Section (responsive) */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
            Meet the Author
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGhJuTnQ4cv0Q/profile-displayphoto-scale_200_200/B4EZl73Xe4GoAg-/0/1758719736398?e=2147483647&v=beta&t=kxJEWst_U4mKMyZJ3_1Ij3OCiX7RkX4vlqWmuFWxez4"
                  alt="Mohammed BEN CHEIKH — Développeur Web Full Stack et créateur de Router-Kit"
                  width="200"
                  height="200"
                  loading="lazy"
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white/10"
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-accent-300">
                  Mohammed BEN CHEIKH
                </h3>
                <p className="text-sm sm:text-base text-white/70 mt-1">
                  Développeur Web Full Stack — Specializing in Digital
                  Experience
                </p>
                <p className="mt-3 text-sm text-white/70 max-w-xl">
                  Creator of Router-Kit — building lightweight, type-safe
                  routing for React. Connect on LinkedIn or explore projects on
                  GitHub.
                </p>

                <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                  <a
                    href="https://ma.linkedin.com/in/mohammed-ben-cheikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-md font-medium hover:bg-white/20 transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-blue text-primary-500 rounded-md font-medium hover:shadow-lg transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
            Install Router-Kit and start building amazing React applications
            with simple, powerful routing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/docs"
              className="px-8 py-4 bg-gradient-blue text-primary-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300 hover:-translate-y-1"
            >
              Read Documentation
            </Link>
            <a
              href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Star on GitHub ⭐
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
