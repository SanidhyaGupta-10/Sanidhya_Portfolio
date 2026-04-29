/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "#components": "/src/components",
      "#constants": "/src/constants",
      "#store": "/src/store",
      "#hoc": "/src/hoc",
      "#windows": "/src/windows",
    };
    return config;
  },
};

export default nextConfig;
