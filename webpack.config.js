const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    target:  'electron-renderer',
    entry:   './src/index.tsx',
    cache:   true,
    mode:    "development",
    devtool: "source-map",
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    output:  { path: path.join(__dirname, "dist"), filename: "bundle.js" },
    plugins: [ new htmlPlugin({filename: "index.html", template: "./index.html"}) ],
    module:  { 
        rules: [ 
            { test: /\.tsx?$/, use: "ts-loader",}, 
            { test: /\.css$/,  use: ["style-loader", "css-loader"], }, 
        ] 
    },
};