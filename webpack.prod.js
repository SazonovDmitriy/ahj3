const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge (common, {
    mode: 'production',
    optimization: {
        minimize: false,
        minimizer: [new CssMinimizerPlugin()]
    },
  plugins: [new MiniCssExtractPlugin()],
});