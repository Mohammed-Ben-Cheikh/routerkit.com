#!/usr/bin/env node

/**
 * Version Validation Script
 *
 * This script validates that all version references in the project
 * are consistent with the centralized version configuration.
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

// Files to validate
const filesToValidate = [
  {
    path: "src/docs/DOCUMENTATION.md",
    patterns: [
      {
        search: /\*\*Version:\*\* (\d+\.\d+\.\d+)/g,
        description: "Documentation version header",
      },
    ],
  },
  {
    path: "src/docs/README.md",
    patterns: [
      {
        search: /Complete documentation for Router-Kit v(\d+\.\d+\.\d+)/g,
        description: "README version reference",
      },
      {
        search: /- \*\*Current Version:\*\* (\d+\.\d+\.\d+)/g,
        description: "Current version info",
      },
      {
        search: /### v(\d+\.\d+\.\d+) \(Current\)/g,
        description: "Changelog current version",
      },
    ],
  },
  {
    path: "package.json",
    patterns: [
      {
        search: /"router-kit": "\^(\d+\.\d+\.\d+)"/g,
        description: "Package.json dependency version",
      },
    ],
  },
  {
    path: "README.md",
    patterns: [
      {
        search: /Router--Kit-v(\d+\.\d+\.\d+)-blue/g,
        description: "README badge version",
      },
    ],
  },
];

const validateVersions = () => {
  const expectedVersion = getVersionFromConfig();

  if (!expectedVersion) {
    console.error("❌ Could not read version from config file");
    process.exit(1);
  }

  console.log(
    `���� Validating all references match version ${expectedVersion}...`
  );

  let hasErrors = false;
  let totalChecks = 0;
  let validChecks = 0;

  filesToValidate.forEach(({ path: filePath, patterns }) => {
    const fullPath = path.join(__dirname, "..", filePath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️  File not found: ${filePath}`);
      return;
    }

    const content = fs.readFileSync(fullPath, "utf8");

    patterns.forEach(({ search, description }) => {
      const matches = [...content.matchAll(search)];

      matches.forEach((match) => {
        totalChecks++;
        const foundVersion = match[1];

        if (foundVersion === expectedVersion) {
          console.log(`✅ ${filePath}: ${description} (${foundVersion})`);
          validChecks++;
        } else {
          console.error(
            `❌ ${filePath}: ${description} - Found ${foundVersion}, expected ${expectedVersion}`
          );
          hasErrors = true;
        }
      });
    });
  });

  console.log(`\n📊 Validation Summary:`);
  console.log(`- Total checks: ${totalChecks}`);
  console.log(`- Valid checks: ${validChecks}`);
  console.log(`- Invalid checks: ${totalChecks - validChecks}`);

  if (hasErrors) {
    console.error(`\n❌ Version validation failed!`);
    console.error(`Run 'npm run update-version' to fix inconsistencies.`);
    process.exit(1);
  } else {
    console.log(`\n🎉 All version references are consistent!`);
    console.log(`🔖 Everything matches version ${expectedVersion}`);
  }
};

// Run validation
validateVersions();
