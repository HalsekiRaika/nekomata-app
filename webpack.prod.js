const { merge } = require("webpack-merge");
const baseCfg = require("./webpack.common");
const cspPlugin = require('csp-html-webpack-plugin');

module.exports = merge(baseCfg, {
    mode: "production",
    plugins: [
        new cspPlugin({"base-uri": ["'self'"], "object-src": ["'none'"],
            "script-src": ["'strict-dynamic'", "'self'", "'nonce-zxNLsxLiu9XeW8fgHl3PtQ=='"],
            "style-src": ["'self'", "'nonce-zxNLsxLiu9XeW8fgHl3PtQ=='"], "frame-src": ["'none'"], "worker-src": ["'none'"]}, ),
    ]
})