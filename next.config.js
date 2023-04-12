module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    // Added this property to be able to host in S3 easily
    images: {
        unoptimized: true,
    },
}