#!/usr/bin/env node

/**
 * Version Update Script for Router-Kit Documentation
 *
 * This script automatically updates all references to Router-Kit version
 * throughout the documentation files based on the centralized version config.
 *
 * Usage: node scripts/update-version.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get version from config
const getVersionFromConfig = () => {
  const configPath = path.join(__dirname, "../src/config/version.ts");
  const configContent = fs.readFileSync(configPath, "utf8");
  const versionMatch = configContent.match(/ROUTER_KIT_VERSION = '([^']+)'/);
  return versionMatch ? versionMatch[1] : null;
};

// Files to update with their patterns
const filesToUpdate = [
  {
    path: "src/docs/DOCUMENTATION.md",
    patterns: [
      {
        search: /\*\*Version:\*\* \d+\.\d+\.\d+/g,
        replace: (version) => `**Version:** ${version}`,
      },
    ],
  },
  {
    path: "src/docs/README.md",
    patterns: [
      {
        search: /Complete documentation for Router-Kit v\d+\.\d+\.\d+/g,
        replace: (version) =>
          `Complete documentation for Router-Kit v${version}`,
      },
      {
        search: /- \*\*Current Version:\*\* \d+\.\d+\.\d+/g,
        replace: (version) => `- **Current Version:** ${version}`,
      },
      {
        search: /### v\d+\.\d+\.\d+ \(Current\)/g,
        replace: (version) => `### v${version} (Current)`,
      },
    ],
  },
  {
    path: "src/docs/CHANGELOG.md",
    patterns: [
      {
        search: /### Migrating to \d+\.\d+\.\d+/g,
        replace: (version) => `### Migrating to ${version}`,
      },
    ],
  },
  {
    path: "package.json",
    patterns: [
      {
        search: /"router-kit": "\^\d+\.\d+\.\d+"/g,
        replace: (version) => `"router-kit": "^${version}"`,
      },
    ],
  },
];

const updateVersion = () => {
  const newVersion = getVersionFromConfig();

  if (!newVersion) {
    console.error("❌ Could not read version from config file");
    process.exit(1);
  }

  console.log(`🔄 Updating all files to version ${newVersion}...`);

  let updatedFiles = 0;
  let totalReplacements = 0;

  filesToUpdate.forEach(({ path: filePath, patterns }) => {
    const fullPath = path.join(__dirname, "..", filePath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️  File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, "utf8");
    let fileChanged = false;
    let fileReplacements = 0;

    patterns.forEach(({ search, replace }) => {
      const matches = content.match(search);
      if (matches) {
        content = content.replace(search, replace(newVersion));
        fileChanged = true;
        fileReplacements += matches.length;
      }
    });

    if (fileChanged) {
      fs.writeFileSync(fullPath, content, "utf8");
      console.log(`✅ Updated ${filePath} (${fileReplacements} replacements)`);
      updatedFiles++;
      totalReplacements += fileReplacements;
    } else {
      console.log(`ℹ️  No changes needed in ${filePath}`);
    }
  });

  console.log(`\n🎉 Update complete!`);
  console.log(
    `📊 Updated ${updatedFiles} files with ${totalReplacements} total replacements`
  );
  console.log(`🔖 All references now point to version ${newVersion}`);
};

// Run the update
updateVersion();
