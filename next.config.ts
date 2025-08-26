import type { NextConfig } from "next";

const repo = "personal_page";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  publicRuntimeConfig: {
    basePath: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;
