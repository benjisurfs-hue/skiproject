import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local Wi-Fi preview on the iPhone; keep the dev allowlist host-specific.
  allowedDevOrigins: ["192.168.1.197"],
};

export default nextConfig;
