var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    // create a bundle for the iframe and a separate bundle for the main frame (the wiki page)
    "iframe": './js/iframe/form.js',
    "create-jira": './js/iframe/create-jira.js',
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
      // tweak to bundle bootstrap, which require jquery as a global variable
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
    ]
  },
  // generate a separate bundled css file for each bundle
  plugins: [
     new ExtractTextPlugin('[name].css'),

  ]
};
