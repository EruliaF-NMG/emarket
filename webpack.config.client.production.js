const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    mode: "production",
    entry: [
        "@babel/polyfill",
        path.join(CURRENT_WORKING_DIR, 'client/index.js'),
        path.join(CURRENT_WORKING_DIR, "client/style/app.scss")
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test:  /\.(sass|scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "/style.css"
        }),
    ]
}

module.exports = config