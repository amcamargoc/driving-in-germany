import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* https://stackoverflow.com/a/76252969 duplicate component in dev mode. in prod works different*/
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        search: '',
      },
    ],
  }
};

export default nextConfig;
