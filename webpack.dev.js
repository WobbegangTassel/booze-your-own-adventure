const path = require('path');
const fs = require('fs');
const { mergeWithRules } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const common = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
            },
          },
        ],
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin()],

  devServer: {
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    port: 8080,
    hot: true,
    liveReload: false,
    static: { directory: path.resolve(__dirname, 'assets') },
    host: 'localhost',
    // https: {
    //   key: fs.readFileSync('localhost-key.pem', 'utf-8'),
    //   cert: fs.readFileSync('localhost.pem', 'utf-8')
    // },
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
  },
  },
};

module.exports = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'merge',
      },
    },
  },
})(common, devConfig);
