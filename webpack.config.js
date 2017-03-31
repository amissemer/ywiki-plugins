var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    "iframe": './js/iframe/form.js',
    "golden-button": './js/mainframe/yloader.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs/dist'),
    publicPath: '/ywiki-plugins/dist/'
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader'
        })
      },
      { test: /\.(gif|eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
    ]
  },
  plugins: [
     new ExtractTextPlugin('[name].css'),

  ]
};
