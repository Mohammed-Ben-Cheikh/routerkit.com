import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define all routes
const routes = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/docs",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/about",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/contact",
    priority: 0.6,
    changefreq: "monthly",
  },
];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split("T")[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  const baseUrl = "https://routerkit.com";
  const currentDate = getCurrentDate();

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
  
</urlset>`;

  // Write to public directory
  const publicDir = join(__dirname, "..", "public");
  const sitemapPath = join(publicDir, "sitemap.xml");

  writeFileSync(sitemapPath, sitemapXml.trim(), "utf-8");
  console.log("✅ Sitemap generated successfully at:", sitemapPath);
  console.log(`📄 Generated ${routes.length} URLs`);
};

// Run the generator
generateSitemap();
