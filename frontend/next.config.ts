
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    '3000-cs-168485815718-default.cs-us-west1-ijlt.cloudshell.dev',
    'localhost:3000',
    'swm-frontend-498108204652.us-central1.run.app'
  ],
  
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*', 
        destination: 'http://35.223.112.181:8000/:path*', 
      },
    ];
  },
};

export default nextConfig;