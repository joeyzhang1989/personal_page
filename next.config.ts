import type { NextConfig } from "next";

const repo = 'personal_page'; // <-- your GitHub repo name

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;