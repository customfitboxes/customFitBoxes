/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withSitemap } = require('next-sitemap');

const nextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

const sitemapConfig = {
  siteUrl: 'https://customfitboxes.com', // Replace with your actual site URL
  generateRobotsTxt: true, // (optional)
};

module.exports = withBundleAnalyzer(withSitemap(sitemapConfig)(nextConfig));
