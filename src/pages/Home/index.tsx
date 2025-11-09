import { Link } from "router-kit";
import MainLayout from "../../components/common/Layout/main";

const Home = () => {
  return (
    <MainLayout>
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
            <div className="max-w-3xl mx-auto bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 text-left">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-white/60 text-xs sm:text-sm">
                  Installation
                </span>
              </div>
              <pre className="text-accent-300 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
                <code>npm install router-kit</code>
              </pre>
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
              <pre className="text-white/80 font-mono text-xs sm:text-sm overflow-x-auto">
                <code>{`import { createRouter } from "router-kit";

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
]);`}</code>
              </pre>
            </div>

            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent-300">
                Use the Router
              </h3>
              <pre className="text-white/80 font-mono text-xs sm:text-sm overflow-x-auto">
                <code>{`import { RouterProvider } from "router-kit";

function App() {
  return (
    <RouterProvider routes={routes} />
  );
}

export default App;`}</code>
              </pre>
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
