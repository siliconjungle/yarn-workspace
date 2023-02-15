/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@project/components'],
  basePath: '/docs',
}

module.exports = nextConfig
