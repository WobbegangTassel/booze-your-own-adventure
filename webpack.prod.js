const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

const production = merge(common, {
  mode: 'production',

  optimization: {
    minimize: true,
    minimizer: ['...', new MiniCssExtractPlugin()],
  },
});

module.exports = production;
