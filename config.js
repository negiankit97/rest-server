module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http://localhost:3000',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://abc!123:abc!123@ds249717.mlab.com:49717/customer_api',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}