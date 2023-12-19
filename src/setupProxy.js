// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://zenquotes.io",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // remove '/api' from the request path
      },
    })
  );
};
