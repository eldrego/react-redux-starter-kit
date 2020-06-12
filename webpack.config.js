const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const SRC_DIR = path.join(__dirname, '/src');
const PUB_DIR = path.join(__dirname, '/public');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: { main: `${SRC_DIR}/index.js` },
  output: {
    path: DIST_DIR,
    chunkFilename: '[chunkhash].[id].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        css: {
          test: /\.(css|sass|scss)$/,
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist'],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'React-Redux-Webpack-Starter-Kit',
      template: `${PUB_DIR}/index.html`,
      filename: 'index.html',
      favicon: `${PUB_DIR}/favicon.ico`,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new WebpackMd5Hash(),
    new Dotenv(),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
