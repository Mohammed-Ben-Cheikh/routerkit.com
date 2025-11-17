import {
  ROUTER_KIT_VERSION,
  getNpmInstallCommand,
  getNpmInstallLatestCommand,
  getVersionInfo,
} from "../config/version";

/**
 * Custom hook to get Router-Kit version information
 *
 * @returns Object containing version information and npm commands
 */
export const useRouterKitVersion = () => {
  return {
    version: ROUTER_KIT_VERSION,
    versionInfo: getVersionInfo(),
    npmInstallCommand: getNpmInstallCommand(),
    npmInstallLatestCommand: getNpmInstallLatestCommand(),
  };
};

/**
 * Get the current Router-Kit version
 *
 * @returns Current version string
 */
export const getRouterKitVersion = (): string => {
  return ROUTER_KIT_VERSION;
};

/**
 * Get npm install command with specific version
 *
 * @returns npm install command with current version
 */
export const getRouterKitInstallCommand = (): string => {
  return getNpmInstallCommand();
};
