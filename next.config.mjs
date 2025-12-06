/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
