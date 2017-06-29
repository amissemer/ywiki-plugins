var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: 'mocha-loader!./tests/index.js',
  output: {
        filename: 'test.build.js',
        path: path.resolve(__dirname, '/tests'),
        publicPath: '/tests'
  },
  module: {
    rules: [
      { test: /\.css$/, loader: 'null-loader' },
      { test: /\.(gif|eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: 'null-loader' },
      // tweak to bundle bootstrap, which require jquery as a global variable
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
      { test: /morris\.js$/, loader: 'imports-loader?jQuery=jquery,$=jquery,Raphael=raphael,this=>window' }
    ]
  },
  devServer: {
        host: 'localhost',
        port: '4300'
  }
};
