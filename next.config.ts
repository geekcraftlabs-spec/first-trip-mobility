import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: [
    "192.168.100.46", // only needed for local phone testing
  ],
};

export default nextConfig;