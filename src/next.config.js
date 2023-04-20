module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    // Added this property to be able to host in S3 with static approach
    images: {
        unoptimized: true,
    },
    output: 'export',
}