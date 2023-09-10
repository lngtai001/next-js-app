const path = require('path')

/** @type {import('next').NextConfig} */
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'source.unsplash.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}




