/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.gr-assets.com'],
  },
};

module.exports = nextConfig;
