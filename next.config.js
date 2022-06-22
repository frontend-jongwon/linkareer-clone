/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["api.linkareer.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/activity",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
