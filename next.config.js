/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // optimizeCss removed — requires optional 'critters' package, causes Vercel build failure
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' },
      { protocol: 'https', hostname: 'github-readme-streak-stats.herokuapp.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
}

module.exports = nextConfig
