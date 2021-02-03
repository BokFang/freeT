const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.react.js'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
        include: path.join(__dirname, "../src"),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '../src'),
        use: [
          'style-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              includePaths: [path.join(__dirname, '../src/styles')]
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "dist/index.html",
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};