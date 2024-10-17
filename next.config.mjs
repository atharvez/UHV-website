/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.xboxservices.com',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'blogimage.vantagefit.io',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
