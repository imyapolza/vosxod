const withSvgr = require("next-plugin-svgr");

/** @type {import('next').NextConfig} */

module.exports = withSvgr({
  webpack(config, options) {
    return config;
  },
});
