var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer : {
    host: 'localhost',
    port: 2222,
    hot: true
  }, 
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exlude: [/node_module/, /public/],
        loader : 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;
