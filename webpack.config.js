const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cspPlugin = require('csp-html-webpack-plugin');
const miniCssExtPlugin = require('mini-css-extract-plugin');

module.exports = {
    target:  'electron-renderer',
    entry:   './src/index.tsx',
    cache:   true,
    mode:    "development",
    devtool: "source-map",
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    output:  { path: path.join(__dirname, "dist"), filename: "bundle.js" },
    plugins: [
        new miniCssExtPlugin(),
        new htmlPlugin({filename: "index.html", template: "./index.html"}),
        // Todo: Allow the use of styled-components without using unsafe-inline in environments locked down by CSP.
        //new cspPlugin({"base-uri": ["'self'"], "object-src": ["'none'"], "script-src": ["'self'"],
        //    "style-src": ["'self'"], "frame-src": ["'none'"], "worker-src": ["'none'"]})
    ],
    module:  { 
        rules: [ 
            { test: /\.tsx?$/, use: "ts-loader",}, 
            { test: /\.css$/,  use: [ miniCssExtPlugin.loader, { loader: "css-loader" } ], },
        ] 
    },
};