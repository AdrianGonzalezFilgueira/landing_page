const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["via.placeholder.com", "avatars.githubusercontent.com"] },
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
