import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

/**
 * PWA configuration using @ducanh2912/next-pwa.
 * Note: aggressiveFrontEndNavCaching is set to false to prevent 
 * unintended caching of sensitive authenticated routes.
 */
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: false, 
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
};

export default withPWA(nextConfig);