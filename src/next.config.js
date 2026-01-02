/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Added this property to be able to host in S3 with static approach
  images: {
    unoptimized: true
  },
  output: 'export',
  // Enhanced compiler options for Next.js 15.1+
  compiler: {
    // Remove console.log in production builds
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Improved performance settings
  poweredByHeader: false,
  compress: true
}

module.exports = nextConfig
