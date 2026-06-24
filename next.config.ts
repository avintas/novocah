import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project so Next doesn't infer a parent
    // directory when sibling lockfiles exist elsewhere on disk.
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iv1mpzqme6lfzzqx.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
