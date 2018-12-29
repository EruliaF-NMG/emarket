const path = require("path");
const webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: "browser",
  mode: "development",
  devtool: "eval-source-map",
  entry: [
      "@babel/polyfill",
      path.join(CURRENT_WORKING_DIR, "client/index.js"),
      path.join(CURRENT_WORKING_DIR, "client/style/app.scss")
    ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test:  /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
        filename: path.join(CURRENT_WORKING_DIR, "/dist/style.css")
    }),
  ]
};

module.exports = config;
