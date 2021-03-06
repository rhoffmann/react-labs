var fs = require('fs');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },

  loaders: [
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
  ],

  target: 'node',

  // externals: fs.readdirSync( path.resolve(__dirname, 'node_modules') ).concat([
  //   'react-dom/server'
  // ]).reduce( function(ext, mod) {
  //   ext[mod] = 'commonjs' + mod;
  //   return ext;
  // }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
