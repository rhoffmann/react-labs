var webpack = require('webpack');

const PATHS = {
  entry: './src/main.js'
}
module.exports = {
  entry: PATHS.entry,

  output: {
    filename: 'bundle.js',
    path: 'public',
    publicPath: ''
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        entry: PATHS.entry,
        exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    formatter: require("eslint-friendly-formatter"),
    configFile: '.eslintrc'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
}

