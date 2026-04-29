/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  // optimizeCss removed — requires optional 'critters' package, causes Vercel build failure
=======
>>>>>>> a25fafe0e4245292cdabe656595e9df6a9af2d6e
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github-readme-stats.vercel.app' },
      { protocol: 'https', hostname: 'github-readme-streak-stats.herokuapp.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
<<<<<<< HEAD
=======
  experimental: { optimizeCss: true },
>>>>>>> a25fafe0e4245292cdabe656595e9df6a9af2d6e
}

module.exports = nextConfig
