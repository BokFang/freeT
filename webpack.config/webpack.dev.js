const path = require("path");
const webpack = require("webpack");
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig,{
  mode: 'development',
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist"),
  },
  devServer: {
    host: "localhost",
    port: 8888,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true,
    },
    inline: true,
    hot: true,
  }
})


