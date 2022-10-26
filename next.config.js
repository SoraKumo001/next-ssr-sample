// @ts-check
/**
 * @type { import("next").NextConfig}
 */
const config = {
  experimental: {
    cpus: 4,
    runtime: "experimental-edge",
    appDir: true,
  },
};
module.exports = config;
