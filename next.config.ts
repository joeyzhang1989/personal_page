/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Ensure this matches your repository name exactly
  basePath: process.env.NODE_ENV === 'production' ? '/personal_page' : '',
};

// Use module.exports for .js configuration files
module.exports = nextConfig;