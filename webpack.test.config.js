module.exports = {
  mode: 'development',
  target: 'node',
//  externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.css$/, loader: 'null-loader' },
      { test: /\.(gif|eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: 'null-loader' },
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
    ]
  },
};
