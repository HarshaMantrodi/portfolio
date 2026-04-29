/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' },
      { protocol: 'https', hostname: 'github-readme-streak-stats.herokuapp.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
  experimental: { optimizeCss: true },
}

module.exports = nextConfig
