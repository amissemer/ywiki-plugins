var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    "golden-button": './js/mainframe/main.js',
    "move-pages-bundle": './js/iframe/move-pages.js',
    "golden-form": './js/iframe/golden-form.js',
    "create-jira-form": './js/iframe/create-jira-form.js'
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      { test: /\.(gif|eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
      // tweak to bundle bootstrap, which require jquery as a global variable
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
      { test: /morris\.js$/, loader: 'imports-loader?jQuery=jquery,$=jquery,Raphael=raphael,this=>window' }
    ]
  },
  // generate a separate bundled css file for each bundle
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

  ]
};
