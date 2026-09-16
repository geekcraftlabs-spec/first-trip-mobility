import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.100.46",
    // Add your other dev machines / LAN IPs here as needed.
    // Wildcards work for hostnames: "*.local-origin.dev"
  ],
};

export default nextConfig;