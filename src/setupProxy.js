const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/Customers',
        createProxyMiddleware({
            target: 'https://localhost:5001/',
            secure: false,
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
    app.use(
        '/api/Addresses',
        createProxyMiddleware({
            target: 'https://localhost:5001/',
            secure: false,
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
};