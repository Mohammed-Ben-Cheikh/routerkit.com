import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../components/common/Layout/main";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Contact Us - Router-Kit | Get Support & Contribute</title>
        <meta
          name="description"
          content="Get in touch with the Router-Kit team. Ask questions, report issues, suggest features, or contribute to the project. We're here to help!"
        />
        <link rel="canonical" href="https://routerkit.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://routerkit.com/contact" />
        <meta
          property="og:title"
          content="Contact Us - Router-Kit | Get Support & Contribute"
        />
        <meta
          property="og:description"
          content="Get in touch with the Router-Kit team. Ask questions, report issues, suggest features, or contribute to the project."
        />
        <meta property="og:image" content="https://routerkit.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://routerkit.com/contact" />
        <meta name="twitter:title" content="Contact Us - Router-Kit" />
        <meta
          name="twitter:description"
          content="Get in touch with the Router-Kit team. Ask questions, report issues, suggest features, or contribute."
        />
        <meta name="twitter:image" content="https://routerkit.com/logo.png" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Have questions, suggestions, or want to contribute? We'd love to
            hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-accent-300">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-500/80 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-300/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-500/80 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-300/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary-500/80 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-300/50 transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-primary-500/80 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-300/50 transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-blue text-primary-500 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-accent-300">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:mohammed.bencheikh.dev@gmail.com"
                      className="text-sm sm:text-base text-white/70 hover:text-accent-300 transition-colors break-all"
                    >
                      mohammed.bencheikh.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      GitHub
                    </h3>
                    <a
                      href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-white/70 hover:text-accent-300 transition-colors break-all"
                    >
                      github.com/Mohammed-Ben-Cheikh/router-kit
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-blue rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      NPM
                    </h3>
                    <a
                      href="https://www.npmjs.com/package/router-kit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-white/70 hover:text-accent-300 transition-colors break-all"
                    >
                      npmjs.com/package/router-kit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                Contributing
              </h2>
              <p className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4">
                We welcome contributions! Check out our GitHub repository to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-white/70">
                <li className="flex items-start">
                  <span className="text-accent-300 mr-2 flex-shrink-0">•</span>
                  <span>Report bugs and issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-300 mr-2 flex-shrink-0">•</span>
                  <span>Suggest new features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-300 mr-2 flex-shrink-0">•</span>
                  <span>Submit pull requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-300 mr-2 flex-shrink-0">•</span>
                  <span>Improve documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
