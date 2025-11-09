const NotFound = () => (
  <div className="min-h-screen bg-primary-500 flex items-center justify-center px-4 sm:px-6">
    <div className="text-center">
      <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-gradient mb-4 sm:mb-6">
        404
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-6 sm:mb-8">
        Page Not Found
      </p>
      <a
        href="/"
        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-blue text-primary-500 rounded-lg font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-accent-300/50 transition-all duration-300 inline-block"
      >
        Go Back Home
      </a>
    </div>
  </div>
);

export default NotFound;
