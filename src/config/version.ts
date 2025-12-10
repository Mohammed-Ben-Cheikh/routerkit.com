/**
 * Router-Kit Version Configuration
 *
 * This file contains the centralized version information for Router-Kit.
 * Update the ROUTER_KIT_VERSION constant to change the version throughout the application.
 */

export const ROUTER_KIT_VERSION = "2.0.1";

/**
 * Version utilities
 */
export const getVersionInfo = () => ({
  version: ROUTER_KIT_VERSION,
  majorVersion: ROUTER_KIT_VERSION.split(".")[0],
  minorVersion: ROUTER_KIT_VERSION.split(".").slice(0, 2).join("."),
  fullVersion: ROUTER_KIT_VERSION,
});

/**
 * NPM install command with current version
 */
export const getNpmInstallCommand = () =>
  `npm install router-kit@${ROUTER_KIT_VERSION}`;

/**
 * NPM install command (latest)
 */
export const getNpmInstallLatestCommand = () => "npm install router-kit";
