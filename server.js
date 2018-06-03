/**
 * 服务器启动
 * Created by Yan on 2018/03/13.
 */
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.dev.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('正在监听开发环境端口：' + '8080');
});
