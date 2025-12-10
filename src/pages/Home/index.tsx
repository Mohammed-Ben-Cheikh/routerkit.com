import { Helmet } from "react-helmet-async";
import { Link } from "router-kit";
import MainLayout from "../../components/common/Layout/main";
import CodeBlock from "../../components/ui/CodeBlock";
import { useRouterKitVersion } from "../../hooks/useRouterKitVersion";

const Home = () => {
  const { version, npmInstallCommand } = useRouterKitVersion();

  return (
    <MainLayout>
      <Helmet>
        <title>
          Router-Kit - Professional React Routing Made Simple | v2.0
        </title>
        <meta
          name="description"
          content="Router-Kit is a lightweight, type-safe routing library with React Router-like API. Features SSR support, route guards, data loaders, navigation blocking, and more. ~140kb gzipped."
        />
        <link rel="canonical" href="https://routerkit.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://routerkit.com/" />
        <meta
          property="og:title"
          content="Router-Kit - Professional React Routing Made Simple | v2.0"
        />
        <meta
          property="og:description"
          content="Router-Kit is a lightweight, type-safe routing library with React Router-like API. Features SSR support, route guards, data loaders, and more."
        />
        <meta property="og:image" content="https://routerkit.com/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://routerkit.com/" />
        <meta
          name="twitter:title"
          content="Router-Kit - Professional React Routing Made Simple"
        />
        <meta
          name="twitter:description"
          content="A lightweight, type-safe routing library with React Router-like API. SSR ready, route guards, data loaders, and more."
        />
        <meta name="twitter:image" content="https://routerkit.com/logo.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 relative">
          <div className="text-center">
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-bold text-sm mb-6 animate-pulse">
              🎉 v2.0 Released — Explore the new features!
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-gradient">Router-Kit</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-3 font-semibold">
              Professional React Routing Made Simple
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto px-4">
              A lightweight, type-safe routing library with React Router-like
              API. Build production-ready applications with SSR, route guards,
              data loaders, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/docs"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/Mohammed-Ben-Cheikh/router-kit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Code Preview */}
            <div className="max-w-3xl mx-auto bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white/5 border-b border-white/10">
                <span className="text-sm font-medium text-white/80">
                  Quick Start
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <CodeBlock
                  code={npmInstallCommand}
                  language="bash"
                  showLineNumbers={false}
                />
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-md text-xs font-medium text-white/70">
                    NPM
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-md text-xs font-medium text-emerald-400">
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 rounded-md text-xs font-medium text-indigo-400">
                    ~140kb gzipped
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 rounded-md text-xs font-medium text-purple-400">
                    {version}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Why Router-Kit?
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Everything you need for professional React routing in one
            lightweight package
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "🚀",
                title: "Lightweight",
                description:
                  "~140kb gzipped. Minimal dependencies — only React, React-DOM, and url-join.",
                color: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/20 hover:border-blue-500/40",
              },
              {
                icon: "🎯",
                title: "Type-Safe",
                description:
                  "Full TypeScript support with comprehensive type definitions out of the box.",
                color: "from-purple-500/20 to-pink-500/20",
                borderColor: "border-purple-500/20 hover:border-purple-500/40",
              },
              {
                icon: "🛡️",
                title: "Route Guards",
                description:
                  "Protect routes with authentication and authorization. Async support included.",
                color: "from-emerald-500/20 to-green-500/20",
                borderColor:
                  "border-emerald-500/20 hover:border-emerald-500/40",
              },
              {
                icon: "📦",
                title: "Data Loaders",
                description:
                  "Pre-fetch data at route level with AbortSignal support and error handling.",
                color: "from-orange-500/20 to-amber-500/20",
                borderColor: "border-orange-500/20 hover:border-orange-500/40",
              },
              {
                icon: "🌐",
                title: "SSR Ready",
                description:
                  "Full server-side rendering support with StaticRouter and hydration utilities.",
                color: "from-indigo-500/20 to-violet-500/20",
                borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
              },
              {
                icon: "⚡",
                title: "Lazy Loading",
                description:
                  "Code splitting with lazy prop and Suspense fallback for optimal performance.",
                color: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-500/20 hover:border-yellow-500/40",
              },
              {
                icon: "🔄",
                title: "Navigation Blocking",
                description:
                  "Block navigation for unsaved changes with proceed/reset controls.",
                color: "from-red-500/20 to-pink-500/20",
                borderColor: "border-red-500/20 hover:border-red-500/40",
              },
              {
                icon: "📍",
                title: "Scroll Restoration",
                description:
                  "Automatic or manual scroll position management between navigations.",
                color: "from-teal-500/20 to-cyan-500/20",
                borderColor: "border-teal-500/20 hover:border-teal-500/40",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${feature.color} backdrop-blur-sm border ${feature.borderColor} rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New in v2.0 Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold text-sm mb-4">
              ✨ NEW IN v2.0
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Powerful New Features
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Router-Kit 2.0 brings professional-grade features to React routing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SSR */}
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Server-Side Rendering
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Full SSR support with StaticRouter, hydration, route matching,
                and data prefetching.
              </p>
              <CodeBlock
                code={`import { StaticRouter, matchServerRoutes } from 'router-kit/ssr';

// Server: Match routes and prefetch data
const { matches, redirect } = matchServerRoutes(routes, url);
const loaderData = await prefetchLoaderData(matches);

// Render with StaticRouter
<StaticRouter routes={routes} location={url} loaderData={loaderData} />`}
                language="tsx"
                showLineNumbers={false}
              />
            </div>

            {/* Route Guards */}
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Route Guards</h3>
              </div>
              <p className="text-white/70 mb-4">
                Protect routes with sync or async guards. Automatic redirects
                and inheritance for nested routes.
              </p>
              <CodeBlock
                code={`const requireAuth = async ({ pathname }) => {
  const user = await fetchUser();
  if (!user) return '/login';
  return true;
};

{ path: 'dashboard', component: <Dashboard />, guard: requireAuth }`}
                language="tsx"
                showLineNumbers={false}
              />
            </div>

            {/* Data Loaders */}
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Data Loaders</h3>
              </div>
              <p className="text-white/70 mb-4">
                Pre-fetch data at route level with AbortSignal support and
                dedicated error elements.
              </p>
              <CodeBlock
                code={`{ 
  path: 'user/:id',
  component: <UserProfile />,
  loader: async ({ params, signal }) => {
    const res = await fetch(\`/api/users/\${params.id}\`, { signal });
    return res.json();
  },
  errorElement: <UserError />
}

// In component
const user = useLoaderData<User>();`}
                language="tsx"
                showLineNumbers={false}
              />
            </div>

            {/* Navigation Blocking */}
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Navigation Blocking
                </h3>
              </div>
              <p className="text-white/70 mb-4">
                Block navigation when there are unsaved changes. Control with
                proceed() and reset().
              </p>
              <CodeBlock
                code={`const blocker = useBlocker(() => isDirty);

{blocker.state === 'blocked' && (
  <Modal>
    <p>You have unsaved changes!</p>
    <button onClick={blocker.reset}>Stay</button>
    <button onClick={blocker.proceed}>Leave</button>
  </Modal>
)}`}
                language="tsx"
                showLineNumbers={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hooks Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Comprehensive Hook API
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            React Router-like hooks for complete control over your routing
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "useRouter()", desc: "Full router context access" },
              { name: "useNavigate()", desc: "Programmatic navigation" },
              { name: "useParams()", desc: "Route parameters" },
              { name: "useQuery()", desc: "Query parameters" },
              { name: "useSearchParams()", desc: "Search params with setter" },
              { name: "useLocation()", desc: "Current location object" },
              { name: "useMatches()", desc: "Matched routes for breadcrumbs" },
              { name: "useLoaderData()", desc: "Route loader data" },
              { name: "useBlocker()", desc: "Navigation blocking" },
              { name: "useOutlet()", desc: "Child route element" },
              { name: "useOutletContext()", desc: "Outlet context data" },
            ].map((hook, index) => (
              <div
                key={index}
                className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-indigo-500/30 transition-all"
              >
                <code className="text-indigo-400 font-mono text-sm">
                  {hook.name}
                </code>
                <p className="text-white/60 text-sm mt-1">{hook.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Example Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Quick Example
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Get started in minutes with a familiar API
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-indigo-400">
                Define Your Routes
              </h3>
              <CodeBlock
                language="tsx"
                showLineNumbers={true}
                code={`import { createRouter } from 'router-kit';

const routes = createRouter([
  { path: '/', component: <Home />, meta: { title: 'Home' } },
  { path: 'about', component: <About /> },
  { path: 'users/:id', component: <UserProfile />,
    loader: async ({ params }) => fetchUser(params.id)
  },
  { 
    path: 'dashboard', 
    component: <Dashboard />,
    guard: requireAuth,
    children: [
      { index: true, component: <Overview /> },
      { path: 'settings', component: <Settings /> },
    ]
  },
  { path: '*', component: <NotFound /> }
]);`}
              />
            </div>

            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-indigo-400">
                Use the Router
              </h3>
              <CodeBlock
                language="tsx"
                showLineNumbers={true}
                code={`import { RouterProvider, Link, useNavigate } from 'router-kit';

function App() {
  return (
    <RouterProvider 
      routes={routes}
      basename="/app"
      scrollRestoration="auto"
      fallback={<Loading />}
    />
  );
}

// Navigate programmatically
function UserList() {
  const navigate = useNavigate();
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={\`/users/\${user.id}\`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Declarative Routing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Declarative or Programmatic
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Choose your preferred routing style — both are fully supported
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <span className="text-2xl">📝</span> Programmatic Style
              </h3>
              <CodeBlock
                code={`const routes = createRouter([
  { path: '/', component: <Home /> },
  { path: 'dashboard', component: <Dashboard />,
    guard: requireAuth,
    children: [
      { path: 'settings', component: <Settings /> }
    ]
  }
]);

<RouterProvider routes={routes} />`}
                language="tsx"
                showLineNumbers={false}
              />
            </div>

            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                <span className="text-2xl">🎨</span> Declarative Style
              </h3>
              <CodeBlock
                code={`<Router basename="/app" fallback={<Loading />}>
  <Route path="/" component={<Home />} />
  <Route path="/dashboard" component={<Dashboard />} guard={requireAuth}>
    <Route path="settings" component={<Settings />} />
  </Route>
  <Route path="*" component={<NotFound />} />
</Router>`}
                language="tsx"
                showLineNumbers={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "v2.0.1", label: "Latest Version" },
              { number: "~140kb", label: "Gzipped Size" },
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

      {/* Author Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
            Meet the Author
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-500/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHtmYGaBz7HHg/profile-displayphoto-scale_200_200/B4EZqbovHjGoAY-/0/1763547743984?e=1767225600&v=beta&t=R_L4o9O6AZNcvd-FAQueWTSz13nZ90Ey4qVmoCAS-iQ"
                  alt="Mohammed BEN CHEIKH — Full Stack Developer and creator of Router-Kit"
                  width="200"
                  height="200"
                  loading="lazy"
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-2 border-white/10"
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-indigo-400">
                  Mohammed BEN CHEIKH
                </h3>
                <p className="text-sm sm:text-base text-white/70 mt-1">
                  Full Stack Web Developer — Specializing in React & TypeScript
                </p>
                <p className="mt-3 text-sm text-white/70 max-w-xl">
                  Creator of Router-Kit — building lightweight, type-safe
                  routing for React. Passionate about developer experience and
                  performant applications.
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
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md font-medium hover:shadow-lg transition"
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
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gradient">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
            Install Router-Kit v2.0 and start building professional React
            applications with powerful routing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/docs"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
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
