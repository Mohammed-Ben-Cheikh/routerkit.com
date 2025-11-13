import { useState } from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../../components/common/Layout/main";
import CodeBlock from "../../components/ui/CodeBlock";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: "getting-started", title: "Getting Started", icon: "🚀" },
    { id: "installation", title: "Installation", icon: "📦" },
    { id: "basic-usage", title: "Basic Usage", icon: "⚡" },
    { id: "routing", title: "Routing", icon: "🔀" },
    { id: "navigation", title: "Navigation", icon: "🧭" },
    { id: "hooks", title: "Hooks", icon: "🪝" },
    { id: "api-reference", title: "API Reference", icon: "📚" },
    { id: "examples", title: "Examples", icon: "💡" },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsSidebarOpen(false);
    // Scroll to top on mobile
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>
          Documentation - Router-Kit | Complete Guide & API Reference
        </title>
        <meta
          name="description"
          content="Complete documentation for Router-Kit: installation guide, API reference, hooks, routing examples, and best practices for React applications. Learn how to build fast SPAs with Router-Kit."
        />
        <link rel="canonical" href="https://routerkit.com/docs" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://routerkit.com/docs" />
        <meta
          property="og:title"
          content="Documentation - Router-Kit | Complete Guide & API Reference"
        />
        <meta
          property="og:description"
          content="Complete documentation for Router-Kit: installation guide, API reference, hooks, routing examples, and best practices for React applications."
        />
        <meta property="og:image" content="https://routerkit.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://routerkit.com/docs" />
        <meta name="twitter:title" content="Documentation - Router-Kit" />
        <meta
          name="twitter:description"
          content="Complete documentation for Router-Kit: installation, API reference, hooks, and routing examples."
        />
        <meta name="twitter:image" content="https://routerkit.com/logo.png" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-blue text-primary-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
                <h3 className="text-lg sm:text-xl font-bold text-accent-300">
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
                        ? "bg-gradient-blue text-primary-500 font-semibold"
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
                    Getting Started with Router-Kit
                  </h1>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base sm:text-lg">
                    Router-Kit is a lightweight, minimal, and powerful
                    client-side routing library for React applications.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        🎯 Key Features
                      </h2>
                      <ul className="space-y-3 text-white/80 text-sm sm:text-base">
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Lightweight:</strong> Minimal dependencies
                            (React, React-DOM, url-join)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Simple API:</strong> Easy to learn and use
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Type-Safe:</strong> Full TypeScript support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Dynamic Routes:</strong> Support for route
                            parameters
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2 flex-shrink-0">
                            ✓
                          </span>
                          <span>
                            <strong>Nested Routes:</strong> Complex route
                            hierarchies
                          </span>
                        </li>
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
                        code="npm install router-kit"
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

                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary-300/10 border border-primary-300/30 rounded-lg">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-accent-300">
                      📋 Requirements
                    </h3>
                    <ul className="text-white/80 space-y-1 text-sm sm:text-base">
                      <li>React ≥16 &lt;20</li>
                      <li>React-DOM ≥16 &lt;20</li>
                      <li>TypeScript ≥5.2.0 (optional)</li>
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
                    Here's a minimal example to get you started:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent-300">
                        1. Create Your Routes
                      </h3>
                      <CodeBlock
                        code={`import { createRouter } from "router-kit";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

const routes = createRouter([
  { path: "/", component: <Home /> },
  { path: "about", component: <About /> },
  { path: "/404", component: <NotFound /> },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent-300">
                        2. Use RouterProvider
                      </h3>
                      <CodeBlock
                        code={`import { RouterProvider } from "router-kit";

function App() {
  return <RouterProvider routes={routes} />;
}

export default App;`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent-300">
                        3. Add Navigation
                      </h3>
                      <CodeBlock
                        code={`import { Link, NavLink } from "router-kit";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
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
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Dynamic Routes
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Define dynamic route parameters using colon syntax:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  { path: "users/:id", component: <UserProfile /> },
  { path: "posts/:category/:slug", component: <BlogPost /> },
  // Best practice: use descriptive param names — prefer ":stepNumber" over generic ":step" or numbered params like ":step1"
  { path: "register/steps/:stepNumber", component: <RegisterStep /> },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Nested Routes
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Create complex route hierarchies:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  {
    path: "dashboard",
    component: <DashboardLayout />,
    children: [
      { path: "", component: <DashboardHome /> },
      { path: "settings", component: <Settings /> },
    ],
  },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Multiple Path Aliases
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Define multiple paths for the same route:
                      </p>
                      <CodeBlock
                        code={`const routes = createRouter([
  { 
    path: ["about", "about-us", "info"], 
    component: <About /> 
  },
]);`}
                        language="tsx"
                      />
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
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Link Component
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Basic navigation with Link component:
                      </p>
                      <CodeBlock
                        code={`import { Link } from "router-kit";

<Link to="/about" className="nav-link">
  About Us
</Link>`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        NavLink Component
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Navigation with active state:
                      </p>
                      <CodeBlock
                        code={`import { NavLink } from "router-kit";

<NavLink 
  to="/about" 
  className="nav-link"
  activeClassName="active"
>
  About
</NavLink>`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Programmatic Navigation
                      </h2>
                      <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                        Navigate using the useRouter hook:
                      </p>
                      <CodeBlock
                        code={`import { useRouter } from "router-kit";

function MyComponent() {
  const { navigate } = useRouter();
  
  const handleClick = () => {
    navigate("/dashboard");
    
    // Or with options
    navigate("/login", { replace: true });
  };
  
  return <button onClick={handleClick}>Go</button>;
}`}
                        language="tsx"
                      />
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
                        description: "Access router context and navigate",
                        code: `const { path, navigate } = useRouter();`,
                      },
                      {
                        name: "useParams()",
                        description: "Extract route parameters",
                        code: `const { id, slug } = useParams();`,
                      },
                      {
                        name: "useQuery()",
                        description: "Parse URL query parameters",
                        code: `const { search, page } = useQuery();`,
                      },
                      {
                        name: "useLocation()",
                        description: "Access location details",
                        code: `const { pathname, search, hash, state } = useLocation();`,
                      },
                      {
                        name: "useDynamicComponents()",
                        description:
                          'Conditional component rendering. The second parameter refers to a URL param — it must match the parameter name used in your route path (e.g. "step" for "register/steps/:step").',
                        code: ` 
import React from "react";
import { useDynamicComponents } from "router-kit";

// Example step components (can be separate files)
const StepOne = () => <h2>Welcome to Step One</h2>;
const StepTwo = () => <h2>Now you’re on Step Two</h2>;
const StepThree = () => <h2>Final Step: Review & Submit</h2>;

export default function StepWizard() {

  const steps = {
    step1: <StepOne />,
    step2: <StepTwo />,
    step3: <StepThree />,
  };

  const CurrentStep = useDynamicComponents(steps, "step");

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        🧭 Dynamic Step Wizard
      </h1>
      <div className="border-t border-gray-200 pt-4">{CurrentStep}</div>
    </div>
  );
}`,
                      },
                    ].map((hook, index) => (
                      <div key={index}>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
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
                    Complete API documentation for Router-Kit
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="bg-primary-500/80 rounded-lg p-4 sm:p-6 border border-white/10">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-accent-300">
                        createRouter(routes)
                      </h3>
                      <p className="text-white/70 mb-2 sm:mb-3 text-sm sm:text-base">
                        Creates and normalizes a route configuration
                      </p>
                      <div className="text-xs sm:text-sm text-white/60">
                        <strong>Parameters:</strong> routes: Route[]
                        <br />
                        <strong>Returns:</strong> Route[]
                      </div>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-4 sm:p-6 border border-white/10">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-accent-300">
                        RouterProvider
                      </h3>
                      <p className="text-white/70 mb-2 sm:mb-3 text-sm sm:text-base">
                        Main routing component that wraps your application
                      </p>
                      <div className="text-xs sm:text-sm text-white/60">
                        <strong>Props:</strong> routes: Route[]
                      </div>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-4 sm:p-6 border border-white/10">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-accent-300">
                        Link
                      </h3>
                      <p className="text-white/70 mb-2 sm:mb-3 text-sm sm:text-base">
                        Navigation component without full page reload
                      </p>
                      <div className="text-xs sm:text-sm text-white/60">
                        <strong>Props:</strong> to: string, children: ReactNode,
                        className?: string
                      </div>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-4 sm:p-6 border border-white/10">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-accent-300">
                        NavLink
                      </h3>
                      <p className="text-white/70 mb-2 sm:mb-3 text-sm sm:text-base">
                        Link with active state styling
                      </p>
                      <div className="text-xs sm:text-sm text-white/60">
                        <strong>Props:</strong> to: string, children: ReactNode,
                        className?: string, activeClassName?: string
                      </div>
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
                    Real-world usage examples
                  </p>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Blog Platform
                      </h2>
                      <CodeBlock
                        code={`const routes = createRouter([
  { path: "/", component: <BlogHome /> },
  { path: "posts/:category/:slug", component: <BlogPost /> },
  { path: "author/:username", component: <AuthorProfile /> },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        E-commerce Site
                      </h2>
                      <CodeBlock
                        code={`const routes = createRouter([
  { path: "/", component: <HomePage /> },
  { path: "products", component: <ProductList /> },
  { path: "products/:id", component: <ProductDetail /> },
  { path: "cart", component: <Cart /> },
  { path: "checkout", component: <Checkout /> },
]);`}
                        language="tsx"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-accent-300">
                        Dashboard Application
                      </h2>
                      <CodeBlock
                        code={`const views = {
  overview: <OverviewView />,
  analytics: <AnalyticsView />,
  settings: <SettingsView />,
};

function Dashboard() {
  const component = useDynamicComponents(views, "view");
  return <div>{component}</div>;
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
