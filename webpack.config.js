const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cspPlugin = require('csp-html-webpack-plugin');
const miniCssExtPlugin = require('mini-css-extract-plugin');

module.exports = (env, args) => {
    const DEVELOP_MODE = args.mode === "development";
    return {
        target:  'electron-renderer',
        entry:   './src/index.tsx',
        cache:   true,
        mode:    DEVELOP_MODE ? "development" : "production",
        devtool: "source-map",
        resolve: { extensions: [".ts", ".tsx", ".js"] },
        output:  { path: path.join(__dirname, "dist"), filename: "bundle.js" },
        node:    { __dirname: false },
        plugins: [
            new miniCssExtPlugin(),
            new htmlPlugin({filename: "index.html", template: "./src/index.html"}),
            (DEVELOP_MODE ? [] : new cspPlugin({"base-uri": ["'self'"], "object-src": ["'none'"], "script-src": ["'self'"],
                "style-src": ["'self'"], "frame-src": ["'none'"], "worker-src": ["'none'"]})),
        ],
        module:  {
            rules: [
                { test: /\.tsx?$/, use: "ts-loader",},
                { test: /\.css$/,  use: [ miniCssExtPlugin.loader, { loader: "css-loader" } ], },
            ]
        },
    }
};