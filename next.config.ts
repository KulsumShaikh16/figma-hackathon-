// next.config.js
const nextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    // Add a rule to handle the `part:` scheme
    config.module.rules.push({
      test: /part:@sanity.*/,
      use: 'null-loader',
    });

    return config;
  },
};

module.exports = nextConfig;