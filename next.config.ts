import type { NextConfig } from "next";

const repo = 'personal_page'; 

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  trailingSlash: true,
};

export default nextConfig;