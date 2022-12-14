/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: "@next/font/google" }],
  },
  images: {
    domains: ["archives.bulbagarden.net"],
  },
};

module.exports = nextConfig;
