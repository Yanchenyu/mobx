/**
 * webpack开发模式
 * Created by Yan on 2018/03/14.
 */

const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/',
    chunkFilename: '[name].js'
  },
  resolve: {
      extensions: ['.js', '.jsx', '.css', '.ejs']
  },
  devtool: 'eval-source-map', // 浏览器的tab（Sources）生成webpack://，便于开发调试
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    })
  ],
  module: {
      loaders: [
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader!postcss-loader',
              exclude: /node_modules/
          },{
              test: /\.(png|jpg|gif)$/,
              loader: 'file-loader',
          },{
              test: /\.jsx?$/,
              loaders: ['babel-loader'],
              include: path.join(__dirname, 'src')
          },{
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: ['babel-loader', 'eslint-loader'],
              include: path.join(__dirname, 'src')
          },{
              test: require.resolve('zepto'),
              loader: 'exports-loader?window.Zepto!script-loader'
          }
      ]
  }
};
