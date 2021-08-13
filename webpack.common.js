const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const miniCssExtPlugin = require('mini-css-extract-plugin');
const createSCTPlugin = require('typescript-plugin-styled-components').default;
const sctPlugin = createSCTPlugin();

module.exports = {
    target:  'electron-renderer',
    entry:   './src/index.tsx',
    cache:   true,
    devtool: "source-map",
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    node:    { __dirname: false },
    output:  {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        globalObject: "this"
    },
    plugins: [
        new miniCssExtPlugin(),
        new htmlPlugin({filename: "index.html", template: "./src/index.html"}),
    ],
    module:  {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", options: { getCustomTransformers: () => ({ before: [ sctPlugin ]}) }},
            { test: /\.css$/,  use: [ miniCssExtPlugin.loader, { loader: "css-loader" } ], },
        ]
    },
};