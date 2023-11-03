/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DEV_STATIC_HOST: 'http://localhost:5000/',
        DEV_BACKEND_URL: 'http://localhost:5000/',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
            },
        ],
    },
};

module.exports = nextConfig;
