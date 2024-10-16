/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.xboxservices.com',
        port: '',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'blogimage.vantagefit.io', // Add this line
        port: '',
        pathname: '/**', // Allow all paths
      },
module.exports = {
  images: {
    domains: ['i.imgur.com'], 
  },
}

    ],
  },
};

export default nextConfig;
