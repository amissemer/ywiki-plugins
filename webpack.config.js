var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    iframe: './js/iframe/form.js',
    mainframe: './js/mainframe/main.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'docs/dist'),
    publicPath: '/dist/'
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
     new ExtractTextPlugin('[name]-styles.css'),

  ]
};
