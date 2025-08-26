const repo = 'personal_page'; // <-- your GitHub repo name

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;