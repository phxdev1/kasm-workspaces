/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'PhxDev',
    description: 'PhXdev image store',
    icon: '/img/logo.svg',
    listUrl: 'https://phxdev1.github.io/kasm-workspaces/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
