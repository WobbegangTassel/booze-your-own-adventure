const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const path = require('path');

module.exports = {
  entry: { app: './index.js' },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },

  stats: {
    preset: 'minimal',
    builtAt: true,
    colors: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new ProgressPlugin(),
  ].filter(Boolean),

  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
};
