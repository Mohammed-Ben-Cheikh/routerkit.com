import { useState } from "react";
import MainLayout from "../../components/common/Layout/main";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("getting-started");

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

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-20 bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-accent-300">
                Documentation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
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
          <main className="flex-1">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              {activeSection === "getting-started" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Getting Started with Router-Kit
                  </h1>
                  <p className="text-white/80 mb-6 text-lg">
                    Router-Kit is a lightweight, minimal, and powerful
                    client-side routing library for React applications.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        🎯 Key Features
                      </h2>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2">✓</span>
                          <span>
                            <strong>Lightweight:</strong> Minimal dependencies
                            (React, React-DOM, url-join)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2">✓</span>
                          <span>
                            <strong>Simple API:</strong> Easy to learn and use
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2">✓</span>
                          <span>
                            <strong>Type-Safe:</strong> Full TypeScript support
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2">✓</span>
                          <span>
                            <strong>Dynamic Routes:</strong> Support for route
                            parameters
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-300 mr-2">✓</span>
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
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Installation
                  </h1>
                  <p className="text-white/80 mb-6 text-lg">
                    Install Router-Kit using your preferred package manager:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <div className="text-white/60 text-sm mb-2">NPM</div>
                      <pre className="text-accent-300 font-mono">
                        npm install router-kit
                      </pre>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <div className="text-white/60 text-sm mb-2">Yarn</div>
                      <pre className="text-accent-300 font-mono">
                        yarn add router-kit
                      </pre>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <div className="text-white/60 text-sm mb-2">PNPM</div>
                      <pre className="text-accent-300 font-mono">
                        pnpm add router-kit
                      </pre>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-primary-300/10 border border-primary-300/30 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 text-accent-300">
                      📋 Requirements
                    </h3>
                    <ul className="text-white/80 space-y-1">
                      <li>React ≥16 &lt;20</li>
                      <li>React-DOM ≥16 &lt;20</li>
                      <li>TypeScript ≥5.2.0 (optional)</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "basic-usage" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Basic Usage
                  </h1>
                  <p className="text-white/80 mb-6 text-lg">
                    Here's a minimal example to get you started:
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        1. Create Your Routes
                      </h3>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`import { createRouter } from "router-kit";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

const routes = createRouter([
  { path: "/", component: <Home /> },
  { path: "about", component: <About /> },
  { path: "/404", component: <NotFound /> },
]);`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        2. Use RouterProvider
                      </h3>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`import { RouterProvider } from "router-kit";

function App() {
  return <RouterProvider routes={routes} />;
}

export default App;`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        3. Add Navigation
                      </h3>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`import { Link, NavLink } from "router-kit";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "routing" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Routing
                  </h1>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Dynamic Routes
                      </h2>
                      <p className="text-white/80 mb-4">
                        Define dynamic route parameters using colon syntax:
                      </p>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`const routes = createRouter([
  { path: "users/:id", component: <UserProfile /> },
  { path: "posts/:category/:slug", component: <BlogPost /> },
]);`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Nested Routes
                      </h2>
                      <p className="text-white/80 mb-4">
                        Create complex route hierarchies:
                      </p>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`const routes = createRouter([
  {
    path: "dashboard",
    component: <DashboardLayout />,
    children: [
      { path: "", component: <DashboardHome /> },
      { path: "settings", component: <Settings /> },
    ],
  },
]);`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Multiple Path Aliases
                      </h2>
                      <p className="text-white/80 mb-4">
                        Define multiple paths for the same route:
                      </p>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`const routes = createRouter([
  { 
    path: ["about", "about-us", "info"], 
    component: <About /> 
  },
]);`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "navigation" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Navigation
                  </h1>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Link Component
                      </h2>
                      <p className="text-white/80 mb-4">
                        Basic navigation with Link component:
                      </p>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`import { Link } from "router-kit";

<Link to="/about" className="nav-link">
  About Us
</Link>`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        NavLink Component
                      </h2>
                      <p className="text-white/80 mb-4">
                        Navigation with active state:
                      </p>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`import { NavLink } from "router-kit";

<NavLink 
  to="/about" 
  className="nav-link"
  activeClassName="active"
>
  About
</NavLink>`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Programmatic Navigation
                      </h2>
                      <p className="text-white/80 mb-4">
                        Navigate using the useRouter hook:
                      </p>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`import { useRouter } from "router-kit";

function MyComponent() {
  const { navigate } = useRouter();
  
  const handleClick = () => {
    navigate("/dashboard");
    
    // Or with options
    navigate("/login", { replace: true });
  };
  
  return <button onClick={handleClick}>Go</button>;
}`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "hooks" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Hooks
                  </h1>
                  <div className="space-y-8">
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
                        description: "Conditional component rendering",
                        code: `const component = useDynamicComponents(views, "view");`,
                      },
                    ].map((hook, index) => (
                      <div key={index}>
                        <h2 className="text-2xl font-bold mb-4 text-accent-300">
                          {hook.name}
                        </h2>
                        <p className="text-white/80 mb-4">{hook.description}</p>
                        <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                          <pre className="text-white/80 font-mono text-sm">
                            {hook.code}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "api-reference" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    API Reference
                  </h1>
                  <p className="text-white/80 mb-8 text-lg">
                    Complete API documentation for Router-Kit
                  </p>

                  <div className="space-y-8">
                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        createRouter(routes)
                      </h3>
                      <p className="text-white/70 mb-3">
                        Creates and normalizes a route configuration
                      </p>
                      <div className="text-sm text-white/60">
                        <strong>Parameters:</strong> routes: Route[]
                        <br />
                        <strong>Returns:</strong> Route[]
                      </div>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        RouterProvider
                      </h3>
                      <p className="text-white/70 mb-3">
                        Main routing component that wraps your application
                      </p>
                      <div className="text-sm text-white/60">
                        <strong>Props:</strong> routes: Route[]
                      </div>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        Link
                      </h3>
                      <p className="text-white/70 mb-3">
                        Navigation component without full page reload
                      </p>
                      <div className="text-sm text-white/60">
                        <strong>Props:</strong> to: string, children: ReactNode,
                        className?: string
                      </div>
                    </div>

                    <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                      <h3 className="text-xl font-bold mb-3 text-accent-300">
                        NavLink
                      </h3>
                      <p className="text-white/70 mb-3">
                        Link with active state styling
                      </p>
                      <div className="text-sm text-white/60">
                        <strong>Props:</strong> to: string, children: ReactNode,
                        className?: string, activeClassName?: string
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "examples" && (
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">
                    Examples
                  </h1>
                  <p className="text-white/80 mb-8 text-lg">
                    Real-world usage examples
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Blog Platform
                      </h2>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`const routes = createRouter([
  { path: "/", component: <BlogHome /> },
  { path: "posts/:category/:slug", component: <BlogPost /> },
  { path: "author/:username", component: <AuthorProfile /> },
]);`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        E-commerce Site
                      </h2>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`const routes = createRouter([
  { path: "/", component: <HomePage /> },
  { path: "products", component: <ProductList /> },
  { path: "products/:id", component: <ProductDetail /> },
  { path: "cart", component: <Cart /> },
  { path: "checkout", component: <Checkout /> },
]);`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold mb-4 text-accent-300">
                        Dashboard Application
                      </h2>
                      <div className="bg-primary-500/80 rounded-lg p-6 border border-white/10">
                        <pre className="text-white/80 font-mono text-sm overflow-x-auto">
                          <code>{`const views = {
  overview: <OverviewView />,
  analytics: <AnalyticsView />,
  settings: <SettingsView />,
};

function Dashboard() {
  const component = useDynamicComponents(views, "view");
  return <div>{component}</div>;
}`}</code>
                        </pre>
                      </div>
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
