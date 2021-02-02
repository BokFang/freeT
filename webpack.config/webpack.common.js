const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
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
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
