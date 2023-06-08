const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://thethao247.vn/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            },
        })
    );
};