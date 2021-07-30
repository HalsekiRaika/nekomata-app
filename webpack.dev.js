const { merge } = require("webpack-merge");
const baseCfg = require("./webpack.common");

module.exports = merge(baseCfg, {
    mode: "development",
});