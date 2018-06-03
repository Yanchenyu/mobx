/**
 * webpack生产模式
 * Created by Yan on 2018/03/14.
 */

const webpack = require('webpack');
const commonConfig = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
commonConfig.output.publicPath = '';
commonConfig.module.loaders.unshift(
    {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }
);
commonConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        mangle: true
    })
);
module.exports = commonConfig;
