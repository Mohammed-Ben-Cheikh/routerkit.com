import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../components/common/Layout/main";
import CodeBlock from "../../components/ui/CodeBlock";
import { useRouterKitVersion } from "../../hooks/useRouterKitVersion";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { npmInstallCommand } = useRouterKitVersion();

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: "🚀" },
    { id: "installation", title: "Installation", icon: "📦" },
    { id: "basic-usage", title: "Basic Usage", icon: "⚡" },
    { id: "routing", title: "Routing", icon: "🔀" },
    { id: "declarative-routing", title: "Declarative Routing", icon: "🎯" },
    { id: "navigation", title: "Navigation", icon: "🧭" },
    { id: "route-guards", title: "Route Guards", icon: "🛡️" },
    { id: "data-loaders", title: "Data Loaders", icon: "📦" },
    { id: "navigation-blocking", title: "Navigation Blocking", icon: "🔄" },
    { id: "ssr", title: "Server-Side Rendering", icon: "🌐" },
    { id: "hooks", title: "Hooks", icon: "🪝" },
    { id: "api-reference", title: "API Reference", icon: "📚" },
    { id: "examples", title: "Examples", icon: "💡" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>
          Documentation - Router-Kit v2.0 | Complete Guide & API Reference
        </title>
        <meta
          name="description"
          content="Complete documentation for Router-Kit v2.0: SSR, route guards, data loaders, navigation blocking, hooks, and API reference for professional React routing."
        />
        <link rel="canonical" href="https://routerkit.com/docs" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://routerkit.com/docs" />
        <meta
          property="og:title"
          content="Documentation - Router-Kit v2.0 | Complete Guide & API Reference"
        />
        <meta
          property="og:description"
          content="Complete documentation for Router-Kit v2.0: SSR, route guards, data loaders, navigation blocking, and more."
        />
        <meta property="og:image" content="https://routerkit.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://routerkit.com/docs" />
        <meta name="twitter:title" content="Documentation - Router-Kit v2.0" />
        <meta
          name="twitter:description"
          content="Complete documentation for Router-Kit v2.0 with SSR, route guards, data loaders, and more."
        />
        <meta name="twitter:image" content="https://routerkit.com/logo.png" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Toggle documentation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
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

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside
            className={`lg:w-64 shrink-0 ${
              isSidebarOpen
                ? "fixed inset-0 z-40 bg-primary-500/95 backdrop-blur-md p-4 overflow-y-auto"
                : "hidden lg:block"
            }`}
          >
            <div
              className={`${
                isSidebarOpen ? "" : "sticky top-20"
              } bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-indigo-400">
                  Documentation
                </h3>
                {isSidebarOpen && (
                  <button
                    onClick={toggleSidebar}
                    className="lg:hidden text-white/70 hover:text-white"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
                    className={`w-full text-left px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8">
              {activeSection === "getting-started" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Getting Started with Router-Kit v2.0
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Router-Kit is a lightweight, type-safe routing library for
                    React with a React Router-like API. Build professional
                    applications with SSR, route guards, data loaders, and more.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        🎯 Key Features
                      </h2>
                      <ul className="space-y-3 text-white/80 text-sm sm:text-base">
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Lightweight:</strong> ~140kb gzipped with
                            minimal dependencies
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Type-Safe:</strong> Full TypeScript support
                            with comprehensive types
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Route Guards:</strong> Protect routes with
                            sync/async authentication
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Data Loaders:</strong> Pre-fetch data at
                            route level with AbortSignal
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>SSR Ready:</strong> Server-side rendering
                            with StaticRouter and hydration
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Navigation Blocking:</strong> Prevent
                            navigation for unsaved changes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Lazy Loading:</strong> Code splitting with
                            React.lazy and Suspense
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-emerald-400 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Scroll Restoration:</strong> Automatic or
                            manual scroll position management
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-indigo-400">
                        🆕 What's New in v2.0
                      </h3>
                      <ul className="text-white/80 space-y-1 text-sm sm:text-base">
                        <li>• Server-Side Rendering (SSR) support</li>
                        <li>• Route Guards with async support</li>
                        <li>• Data Loaders with AbortSignal</li>
                        <li>• Navigation Blocking (useBlocker)</li>
                        <li>• Outlet component for nested layouts</li>
                        <li>
                          • New hooks: useNavigate, useMatches, useSearchParams,
                          useOutletContext
                        </li>
                        <li>• Scroll restoration modes</li>
                        <li>• Route metadata for SEO</li>
                        <li>• Basename support for sub-directories</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "installation" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Installation
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Install Router-Kit using your preferred package manager:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="text-white/60 text-sm mb-2">NPM</div>
                      <CodeBlock
                        code={npmInstallCommand}
                        language="bash"
                        showLineNumbers={false}
                      />
                    </div>

                    <div>
                      <div className="text-white/60 text-sm mb-2">Yarn</div>
                      <CodeBlock
                        code="yarn add router-kit"
                        language="bash"
                        showLineNumbers={false}
                      />
                    </div>

                    <div>
                      <div className="text-white/60 text-sm mb-2">PNPM</div>
                      <CodeBlock
                        code="pnpm add router-kit"
                        language="bash"
                        showLineNumbers={false}
                      />
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-emerald-400">
                      📋 Requirements
                    </h3>
                    <ul className="text-white/80 space-y-1 text-sm sm:text-base">
                      <li>React ≥16 &lt;20</li>
                      <li>React-DOM ≥16 &lt;20</li>
                      <li>TypeScript ≥5.2.0 (optional but recommended)</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "basic-usage" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Basic Usage
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Here's a minimal example to get you started with Router-Kit
                    v2.0:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-indigo-400">
                        1. Create Your Routes
                      </h3>
                      <CodeBlock
                        code={`import { createRouter } from 'router-kit';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

const routes = createRouter([
  { path: '/', component: <Home />, meta: { title: 'Home' } },
  { path: 'about', component: <About />, meta: { title: 'About' } },
  { path: '*', component: <NotFound /> },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-indigo-400">
                        2. Use RouterProvider
                      </h3>
                      <CodeBlock
                        code={`import { RouterProvider } from 'router-kit';

function App() {
  return (
    <RouterProvider 
      routes={routes}
      basename="/"
      fallbackElement={<div>Loading...</div>}
    />
  );
}

export default App;`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-indigo-400">
                        3. Add Navigation
                      </h3>
                      <CodeBlock
                        code={`import { Link, NavLink, useNavigate } from 'router-kit';

function Navigation() {
  const navigate = useNavigate();
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <button onClick={() => navigate('/contact')}>Contact</button>
    </nav>
  );
}`}
                        language="tsx"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "routing" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Routing
                  </h1>
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Dynamic Routes
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Define dynamic route parameters using colon syntax:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  { path: 'users/:id', component: <UserProfile /> },
  { path: 'posts/:category/:slug', component: <BlogPost /> },
  { path: 'files/*', component: <FileViewer /> }, // Catch-all
]);

// Access params in component
function UserProfile() {
  const { id } = useParams<{ id: string }>();
  return <h1>User: {id}</h1>;
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Nested Routes
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Create complex route hierarchies with the Outlet
                        component:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  {
    path: 'dashboard',
    component: <DashboardLayout />,
    children: [
      { index: true, component: <DashboardHome /> },
      { path: 'settings', component: <Settings /> },
      { path: 'profile', component: <Profile /> },
    ],
  },
]);

// DashboardLayout.tsx
import { Outlet } from 'router-kit';

function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Index Routes
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Use <code className="text-indigo-400">index: true</code>{" "}
                        for default child routes:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  {
    path: 'dashboard',
    component: <DashboardLayout />,
    children: [
      { index: true, component: <Overview /> }, // Renders at /dashboard
      { path: 'analytics', component: <Analytics /> }, // /dashboard/analytics
    ],
  },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Multiple Path Aliases
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Define multiple paths for the same route:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  { 
    path: ['about', 'about-us', 'info'], 
    component: <About /> 
  },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Route Metadata
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Add metadata for SEO and document title management:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  { 
    path: '/', 
    component: <Home />,
    meta: { 
      title: 'Home - My App',
      description: 'Welcome to My App'
    }
  },
]);`}
                        language="tsx"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "declarative-routing" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Declarative Routing
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Router-Kit supports declarative routing using JSX
                    components, providing an intuitive alternative to the
                    programmatic approach.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Basic Declarative Routing
                      </h2>
                      <CodeBlock
                        code={`import { Router, Route } from 'router-kit';

function App() {
  return (
    <Router basename="/app" fallbackElement={<Loading />}>
      <Route path="/" component={<Home />} meta={{ title: 'Home' }} />
      <Route path="/about" component={<About />} />
      <Route path="/users/:id" component={<UserProfile />} />
      <Route path="*" component={<NotFound />} />
    </Router>
  );
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Nested Declarative Routes
                      </h2>
                      <CodeBlock
                        code={`<Router>
  <Route path="/dashboard" component={<DashboardLayout />} guard={requireAuth}>
    <Route index component={<Overview />} />
    <Route path="settings" component={<Settings />} />
    <Route path="admin" component={<Admin />} guard={requireAdmin} />
  </Route>
</Router>`}
                        language="tsx"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-primary-500/80 border border-white/10 rounded-lg p-4 sm:p-6">
                        <h3 className="text-lg font-semibold mb-2 text-indigo-400">
                          Programmatic
                        </h3>
                        <CodeBlock
                          code={`const routes = createRouter([
  { path: '/', component: <Home /> },
  { path: 'dashboard', 
    component: <Dashboard />,
    children: [
      { path: 'settings', component: <Settings /> }
    ]
  }
]);

<RouterProvider routes={routes} />`}
                          language="tsx"
                        />
                      </div>

                      <div className="bg-primary-500/80 border border-white/10 rounded-lg p-4 sm:p-6">
                        <h3 className="text-lg font-semibold mb-2 text-indigo-400">
                          Declarative
                        </h3>
                        <CodeBlock
                          code={`<Router>
  <Route path="/" component={<Home />} />
  <Route path="/dashboard" component={<Dashboard />}>
    <Route path="settings" component={<Settings />} />
  </Route>
</Router>`}
                          language="tsx"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "navigation" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Navigation
                  </h1>
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Link Component
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Basic navigation without page reload:
                      </p>
                      <CodeBlock
                        code={`import { Link } from 'router-kit';

<Link to="/about" className="nav-link">
  About Us
</Link>

// With state
<Link to="/dashboard" state={{ from: 'home' }}>
  Dashboard
</Link>`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        NavLink Component
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Navigation with active state styling:
                      </p>
                      <CodeBlock
                        code={`import { NavLink } from 'router-kit';

<NavLink 
  to="/about" 
  className="nav-link"
  activeClassName="active"
  end // Exact match only
>
  About
</NavLink>`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        useNavigate Hook
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Programmatic navigation (React Router style):
                      </p>
                      <CodeBlock
                        code={`import { useNavigate } from 'router-kit';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Basic navigation
    navigate('/dashboard');
    
    // With options
    navigate('/login', { replace: true });
    
    // Go back/forward
    navigate(-1); // Go back
    navigate(1);  // Go forward
    
    // With state
    navigate('/profile', { state: { fromLogin: true } });
  };
  
  return <button onClick={handleClick}>Navigate</button>;
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        useRouter Hook (Legacy)
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Access full router context:
                      </p>
                      <CodeBlock
                        code={`import { useRouter } from 'router-kit';

function MyComponent() {
  const { path, navigate, params, query } = useRouter();
  
  return (
    <div>
      <p>Current path: {path}</p>
      <button onClick={() => navigate('/home')}>Go Home</button>
    </div>
  );
}`}
                        language="tsx"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "route-guards" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Route Guards
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Protect routes with authentication and authorization. Guards
                    support both synchronous and asynchronous operations.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Basic Guard
                      </h2>
                      <CodeBlock
                        code={`// Sync guard
const requireAuth = ({ pathname }) => {
  return isAuthenticated() || '/login';
};

// Usage
const routes = createRouter([
  { path: 'login', component: <Login /> },
  { 
    path: 'dashboard', 
    component: <Dashboard />, 
    guard: requireAuth 
  },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Async Guard
                      </h2>
                      <CodeBlock
                        code={`const requireAdmin = async ({ params }) => {
  const user = await fetchUser();
  
  if (!user) return '/login';
  if (!user.isAdmin) return '/unauthorized';
  
  return true;
};

// Usage
{ path: 'admin', component: <AdminPanel />, guard: requireAdmin }`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Guard Inheritance
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Child routes inherit parent guards automatically:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  {
    path: 'dashboard',
    component: <DashboardLayout />,
    guard: requireAuth, // Applied to all children
    children: [
      { path: 'overview', component: <Overview /> }, // inherits requireAuth
      { path: 'settings', component: <Settings /> }, // inherits requireAuth
      { 
        path: 'admin', 
        component: <Admin />, 
        guard: requireAdmin // Both guards run: requireAuth + requireAdmin
      },
    ],
  },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-orange-400">
                        💡 Guard Return Values
                      </h3>
                      <ul className="text-white/80 space-y-1 text-sm sm:text-base">
                        <li>
                          <code className="text-indigo-400">true</code> — Allow
                          navigation
                        </li>
                        <li>
                          <code className="text-indigo-400">false</code> — Block
                          navigation (stays on current page)
                        </li>
                        <li>
                          <code className="text-indigo-400">'/path'</code> —
                          Redirect to the specified path
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "data-loaders" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Data Loaders
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Pre-fetch data at the route level before rendering. Supports
                    AbortSignal for cancellation and dedicated error elements.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Basic Loader
                      </h2>
                      <CodeBlock
                        code={`const routes = createRouter([
  {
    path: 'user/:id',
    component: <UserProfile />,
    loader: async ({ params, signal }) => {
      const response = await fetch(\`/api/users/\${params.id}\`, { signal });
      if (!response.ok) throw new Error('User not found');
      return response.json();
    },
    errorElement: <UserError />,
  },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Access Loader Data
                      </h2>
                      <CodeBlock
                        code={`import { useLoaderData } from 'router-kit';

function UserProfile() {
  const user = useLoaderData<User>();
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Loader Arguments
                      </h2>
                      <CodeBlock
                        code={`interface LoaderArgs {
  params: Record<string, string>;  // Route parameters
  request: Request;                // Request object
  signal: AbortSignal;             // For cancellation
}

// Example with all args
loader: async ({ params, request, signal }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  
  return fetch(\`/api/posts?page=\${page}\`, { signal });
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Error Handling
                      </h2>
                      <CodeBlock
                        code={`function UserError() {
  return (
    <div className="error">
      <h2>Error Loading User</h2>
      <p>The requested user could not be found.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// Route config
{
  path: 'user/:id',
  component: <UserProfile />,
  loader: fetchUser,
  errorElement: <UserError />
}`}
                        language="tsx"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "navigation-blocking" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Navigation Blocking
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Block navigation when there are unsaved changes. Perfect for
                    forms and editors where users might lose work.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        useBlocker Hook
                      </h2>
                      <CodeBlock
                        code={`import { useBlocker } from 'router-kit';

function EditForm() {
  const [isDirty, setIsDirty] = useState(false);
  
  // Block navigation when form is dirty
  const blocker = useBlocker(() => isDirty);
  
  const handleSubmit = async (data) => {
    await saveData(data);
    setIsDirty(false);
  };
  
  return (
    <>
      <form onChange={() => setIsDirty(true)} onSubmit={handleSubmit}>
        <input name="title" />
        <textarea name="content" />
        <button type="submit">Save</button>
      </form>
      
      {/* Confirmation Modal */}
      {blocker.state === 'blocked' && (
        <Modal>
          <h2>Unsaved Changes</h2>
          <p>You have unsaved changes. Are you sure you want to leave?</p>
          <button onClick={blocker.reset}>Stay on Page</button>
          <button onClick={blocker.proceed}>Leave Anyway</button>
        </Modal>
      )}
    </>
  );
}`}
                        language="tsx"
                      />
                    </div>

                    <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-indigo-400">
                        Blocker States
                      </h3>
                      <ul className="text-white/80 space-y-1 text-sm sm:text-base">
                        <li>
                          <code className="text-indigo-400">'unblocked'</code> —
                          Navigation is allowed
                        </li>
                        <li>
                          <code className="text-indigo-400">'blocked'</code> —
                          Navigation is blocked, waiting for user decision
                        </li>
                        <li>
                          <code className="text-indigo-400">'proceeding'</code>{" "}
                          — User confirmed, navigation in progress
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Blocker Methods
                      </h2>
                      <CodeBlock
                        code={`const blocker = useBlocker(shouldBlock);

// When state is 'blocked':
blocker.proceed(); // Continue with navigation
blocker.reset();   // Cancel and stay on page`}
                        language="tsx"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "ssr" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Server-Side Rendering (SSR)
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Router-Kit provides full SSR support with StaticRouter,
                    route matching, data prefetching, and hydration utilities.
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Server Setup
                      </h2>
                      <CodeBlock
                        code={`// server.ts
import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import { 
  StaticRouter, 
  matchServerRoutes, 
  prefetchLoaderData,
  getLoaderDataScript 
} from 'router-kit/ssr';
import { routes } from './routes';

const app = express();

app.use('*all', async (req, res) => {
  const url = req.originalUrl;
  
  // 1. Match routes
  const matchResult = matchServerRoutes(routes, url);
  
  // 2. Handle redirects
  if (matchResult.redirect) {
    return res.redirect(302, matchResult.redirect);
  }
  
  // 3. Prefetch loader data
  const loaderResult = await prefetchLoaderData(matchResult.matches, url);
  
  // 4. Render
  const { pipe } = renderToPipeableStream(
    <html>
      <head>
        <title>{matchResult.meta?.title || 'My App'}</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter 
            routes={routes} 
            location={url}
            loaderData={loaderResult.data}
          />
        </div>
        <script dangerouslySetInnerHTML={{ 
          __html: getLoaderDataScript(loaderResult.data) 
        }} />
        <script src="/client.js" />
      </body>
    </html>,
    {
      onShellReady() {
        res.setHeader('Content-Type', 'text/html');
        pipe(res);
      },
    }
  );
});`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Client Hydration
                      </h2>
                      <CodeBlock
                        code={`// client.tsx
import { hydrateRouter } from 'router-kit/ssr';
import { routes } from './routes';

hydrateRouter(document.getElementById('root')!, {
  routes,
  onHydrated: () => console.log('App hydrated!'),
});`}
                        language="tsx"
                      />
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-emerald-400">
                        SSR Utilities
                      </h3>
                      <ul className="text-white/80 space-y-1 text-sm sm:text-base">
                        <li>
                          <code className="text-indigo-400">StaticRouter</code>{" "}
                          — Server-side router component
                        </li>
                        <li>
                          <code className="text-indigo-400">
                            matchServerRoutes
                          </code>{" "}
                          — Match routes on server
                        </li>
                        <li>
                          <code className="text-indigo-400">
                            prefetchLoaderData
                          </code>{" "}
                          — Pre-fetch data for matched routes
                        </li>
                        <li>
                          <code className="text-indigo-400">
                            getLoaderDataScript
                          </code>{" "}
                          — Generate hydration script
                        </li>
                        <li>
                          <code className="text-indigo-400">hydrateRouter</code>{" "}
                          — Client-side hydration
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "hooks" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Hooks
                  </h1>
                  <div className="space-y-6 sm:space-y-8">
                    {[
                      {
                        name: "useRouter()",
                        description:
                          "Access full router context including path, navigate, params, and query.",
                        code: `const { path, navigate, params, query } = useRouter();`,
                      },
                      {
                        name: "useNavigate()",
                        description:
                          "Programmatic navigation (React Router style).",
                        code: `const navigate = useNavigate();
navigate('/dashboard');
navigate(-1); // Go back`,
                      },
                      {
                        name: "useParams<T>()",
                        description:
                          "Extract route parameters with TypeScript support.",
                        code: `const { id, slug } = useParams<{ id: string; slug: string }>();`,
                      },
                      {
                        name: "useQuery()",
                        description: "Parse URL query parameters.",
                        code: `const { search, page } = useQuery();
// URL: /search?q=test&page=2`,
                      },
                      {
                        name: "useSearchParams()",
                        description:
                          "Read and write search parameters with setter function.",
                        code: `const [searchParams, setSearchParams] = useSearchParams();
const page = searchParams.get('page');
setSearchParams({ page: '2', sort: 'date' });`,
                      },
                      {
                        name: "useLocation()",
                        description: "Access current location object.",
                        code: `const { pathname, search, hash, state } = useLocation();`,
                      },
                      {
                        name: "useMatches()",
                        description:
                          "Get matched routes chain for breadcrumbs.",
                        code: `const matches = useMatches();
// [{ route, params, pathname }, ...]`,
                      },
                      {
                        name: "useLoaderData<T>()",
                        description: "Access data from route loader.",
                        code: `const user = useLoaderData<User>();`,
                      },
                      {
                        name: "useBlocker(shouldBlock)",
                        description: "Block navigation for unsaved changes.",
                        code: `const blocker = useBlocker(() => isDirty);
// blocker.state: 'blocked' | 'unblocked' | 'proceeding'`,
                      },
                      {
                        name: "useOutlet()",
                        description: "Get the child route element directly.",
                        code: `const outlet = useOutlet();
return outlet || <DefaultContent />;`,
                      },
                      {
                        name: "useOutletContext<T>()",
                        description:
                          "Access context passed from parent Outlet.",
                        code: `// Parent: <Outlet context={{ user }} />
// Child:
const { user } = useOutletContext<{ user: User }>();`,
                      },
                    ].map((hook, index) => (
                      <div key={index}>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                          {hook.name}
                        </h2>
                        <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                          {hook.description}
                        </p>
                        <CodeBlock code={hook.code} language="tsx" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "api-reference" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    API Reference
                  </h1>
                  <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg">
                    Complete API documentation for Router-Kit v2.0
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-400">
                        Components
                      </h2>
                      <div className="space-y-4">
                        {[
                          {
                            name: "RouterProvider",
                            desc: "Main routing provider component",
                            props:
                              "routes, basename?, fallbackElement?",
                          },
                          {
                            name: "Link",
                            desc: "Navigation link with prefetch support",
                            props: "to, children, className?, state?, replace?",
                          },
                          {
                            name: "NavLink",
                            desc: "Link with active state styling",
                            props: "to, children, activeClassName?, end?",
                          },
                          {
                            name: "Outlet",
                            desc: "Renders child routes in nested layouts",
                            props: "context?",
                          },
                          {
                            name: "Router",
                            desc: "Declarative router wrapper",
                            props:
                              "basename?, fallbackElement?",
                          },
                          {
                            name: "Route",
                            desc: "Declarative route definition",
                            props:
                              "path, component, guard?, loader?, errorElement?, meta?, children?",
                          },
                        ].map((comp, index) => (
                          <div
                            key={index}
                            className="bg-primary-500/80 rounded-lg p-4 sm:p-6 border border-white/10"
                          >
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-indigo-400">
                              {comp.name}
                            </h3>
                            <p className="text-white/70 mb-2 text-sm sm:text-base">
                              {comp.desc}
                            </p>
                            <div className="text-xs sm:text-sm text-white/60">
                              <strong>Props:</strong> {comp.props}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-400">
                        Route Configuration
                      </h2>
                      <CodeBlock
                        code={`interface Route {
  path: string | string[];       // Route path(s)
  component: JSX.Element;        // Component to render
  children?: Route[];            // Nested routes
  index?: boolean;               // Index route flag
  lazy?: LazyExoticComponent;    // Lazy loaded component
  loader?: RouteLoader;          // Data loader function
  errorElement?: JSX.Element;    // Error boundary element
  redirectTo?: string;           // Redirect destination
  guard?: RouteGuard;            // Route guard function
  meta?: RouteMeta;              // Route metadata
}

interface RouteMeta {
  title?: string;
  description?: string;
  [key: string]: any;
}

type RouteLoader = (args: LoaderArgs) => Promise<any>;
interface LoaderArgs {
  params: Record<string, string>;
  request: Request;
  signal: AbortSignal;
}

type RouteGuard = (args: GuardArgs) => boolean | string | Promise<boolean | string>;
interface GuardArgs {
  pathname: string;
  params: Record<string, string>;
  query: Record<string, string>;
}`}
                        language="typescript"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-400">
                        RouterProvider Props
                      </h2>
                      <CodeBlock
                        code={`interface RouterProviderProps {
  routes: Route[];                          // Route configuration
  basename?: string;                        // Base path for all routes
  fallbackElement?: ReactNode;                     // Loading fallbackElement for lazy routes
}`}
                        language="typescript"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "examples" && (
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
                    Examples
                  </h1>
                  <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg">
                    Real-world usage examples for Router-Kit v2.0
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Dashboard with Authentication
                      </h2>
                      <CodeBlock
                        code={`import { 
  createRouter, 
  RouterProvider, 
  Outlet, 
  NavLink,
  useLoaderData,
  useOutletContext,
  useNavigate 
} from 'router-kit';

// Types
interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
}

interface DashboardContext {
  user: User;
  logout: () => void;
}

// Guards
const requireAuth = async () => {
  const token = getAuthToken();
  if (!token) return '/login';
  return true;
};

const requireAdmin = async () => {
  const user = await fetchCurrentUser();
  return user?.role === 'admin' || '/dashboard';
};

// Layout
function DashboardLayout() {
  const user = useLoaderData<User>();
  const navigate = useNavigate();
  
  const logout = () => {
    clearAuthToken();
    navigate('/login');
  };
  
  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <span>Welcome, {user.name}</span>
        <button onClick={logout}>Logout</button>
      </header>
      
      <nav>
        <NavLink to="/dashboard" end>Overview</NavLink>
        <NavLink to="/dashboard/analytics">Analytics</NavLink>
        <NavLink to="/dashboard/settings">Settings</NavLink>
        {user.role === 'admin' && (
          <NavLink to="/dashboard/admin">Admin</NavLink>
        )}
      </nav>
      
      <main>
        <Outlet context={{ user, logout }} />
      </main>
    </div>
  );
}

// Child using context
function Settings() {
  const { user } = useOutletContext<DashboardContext>();
  return <h2>Settings for {user.name}</h2>;
}

// Routes
const routes = createRouter([
  { path: 'login', component: <Login /> },
  {
    path: 'dashboard',
    component: <DashboardLayout />,
    guard: requireAuth,
    loader: fetchCurrentUser,
    children: [
      { index: true, component: <Overview /> },
      { path: 'analytics', component: <Analytics /> },
      { path: 'settings', component: <Settings /> },
      { path: 'admin', component: <AdminPanel />, guard: requireAdmin },
    ],
  },
]);

// App
function App() {
  return (
    <RouterProvider 
      routes={routes}
      basename="/app"
      fallbackElement={<Loading />}
    />
  );
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Blog with Data Loading
                      </h2>
                      <CodeBlock
                        code={`const routes = createRouter([
  { path: '/', component: <Home /> },
  {
    path: 'blog',
    component: <BlogLayout />,
    children: [
      {
        index: true,
        component: <PostList />,
        loader: async ({ signal }) => {
          const posts = await fetch('/api/posts', { signal })
            .then(r => r.json());
          return posts;
        },
      },
      {
        path: ':slug',
        component: <PostDetail />,
        loader: async ({ params, signal }) => {
          const post = await fetch(\`/api/posts/\${params.slug}\`, { signal })
            .then(r => r.json());
          return post;
        },
        meta: { title: 'Blog Post' },
      },
    ],
  },
]);

function PostList() {
  const posts = useLoaderData<Post[]>();
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={\`/blog/\${post.slug}\`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function PostDetail() {
  const post = useLoaderData<Post>();
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-400">
                        Form with Navigation Blocking
                      </h2>
                      <CodeBlock
                        code={`import { useBlocker, useNavigate } from 'router-kit';

function EditPost() {
  const [isDirty, setIsDirty] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  
  const blocker = useBlocker(() => isDirty);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await savePost(formData);
    setIsDirty(false);
    navigate('/posts');
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title" 
          value={formData.title}
          onChange={handleChange}
        />
        <textarea 
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      
      {blocker.state === 'blocked' && (
        <div className="modal">
          <h2>Unsaved Changes</h2>
          <p>You have unsaved changes. Leave anyway?</p>
          <button onClick={blocker.reset}>Stay</button>
          <button onClick={blocker.proceed}>Leave</button>
        </div>
      )}
    </>
  );
}`}
                        language="tsx"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Docs;
