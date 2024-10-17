/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This allows domains from which external images can be fetched
    domains: ['i.imgur.com'], // Add Imgur to the list of allowed domains

    // Use remotePatterns to configure advanced control for images
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
    ],
  },
};

module.exports = nextConfig;
