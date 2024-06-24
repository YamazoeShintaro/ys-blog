/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        path: 'empty',
      };
    }
    return config;
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
