const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'pliki.farmer.pl'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "./src"],
    prependData: `@import "~@styles/variables.scss";`,
  },
};

module.exports = nextConfig;
