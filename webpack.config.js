var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    "golden-button": './js/mainframe/main.js',
    "golden-form": './js/iframe/golden-form.js',
    "create-jira-form": './js/iframe/create-jira-form.js',
    "dashboard-frame": './js/iframe/dashboard.js',
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
      { test: /morris\.js$/, loader: 'imports-loader?jQuery=jquery,$=jquery,Raphael=raphael,this=>window' }
    ]
  },
  // generate a separate bundled css file for each bundle
  plugins: [
     new ExtractTextPlugin('[name].css'),

  ]
};
