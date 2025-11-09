import { Link } from "router-kit";
import MainLayout from "../../components/common/Layout/main";

const About = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            About Router-Kit
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A modern, lightweight routing solution built with simplicity and
            developer experience in mind.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent-300">
            The Story Behind Router-Kit
          </h2>
          <div className="space-y-4 text-white/80 text-lg leading-relaxed">
            <p>
              Router-Kit was born from the need for a simpler, more intuitive
              routing solution for React applications. While existing routing
              libraries are powerful, they often come with complexity that many
              projects don't need.
            </p>
            <p>
              We believe that routing should be straightforward. You define your
              routes, wrap your app with a provider, and you're done. No complex
              configuration files, no convoluted DSLs, just simple, elegant
              React code.
            </p>
            <p>
              Built with TypeScript from the ground up, Router-Kit provides
              excellent type safety and developer experience while maintaining a
              tiny bundle size that won't bloat your application.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3 text-accent-300">
              Simple by Design
            </h3>
            <p className="text-white/70">
              No unnecessary abstractions. Just the features you need to build
              great applications with React routing.
            </p>
          </div>

          <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-accent-300">
              Performance First
            </h3>
            <p className="text-white/70">
              Minimal dependencies and optimized code ensure your application
              stays fast and responsive.
            </p>
          </div>

          <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-3 text-accent-300">
              Type-Safe
            </h3>
            <p className="text-white/70">
              Written in TypeScript with comprehensive type definitions for the
              best developer experience.
            </p>
          </div>

          <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-3 text-accent-300">
              Open Source
            </h3>
            <p className="text-white/70">
              MIT licensed and open to contributions from the community. We
              believe in building together.
            </p>
          </div>
        </div>

        {/* Author Section */}
        <div className="bg-gradient-blue rounded-xl p-8 md:p-12 text-primary-500">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-primary-500 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">Mohammed Ben Cheikh</h3>
              <p className="text-lg mb-4 opacity-90">
                Creator & Maintainer of Router-Kit
              </p>
              <p className="mb-6 opacity-80">
                Passionate about building tools that make developers' lives
                easier. Creating simple, powerful solutions for complex
                problems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://mohammedbencheikh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-500/90 transition-colors"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Mohammed-Ben-Cheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/docs"
              className="px-8 py-4 bg-gradient-blue text-primary-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
