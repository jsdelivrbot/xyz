const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../../tools/webpack.dev.config');
const path = require('path');
const port = 4040;

const options = {
  publicPath: '/dist/',
  hot: true,
  inline: true,
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,
  stats: {
    all: false,
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
};

const server = new WebpackDevServer(webpack(config), options);

server.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('WebpackDevServer listening at localhost:', port);
});
