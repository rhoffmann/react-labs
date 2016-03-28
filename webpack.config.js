const webpack = require('webpack');
const path = require('path');

const PATHS = {
  entry: './src/main.js',
  dist: __dirname + '/public'
}
module.exports = {
  entry: PATHS.entry,

  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
    chunkFilename: '[id].chunk.js',
    publicPath: '/public/',
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
    // alias:{
    //   app: path.resolve(__dirname, 'src')
    // },
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    formatter: require("eslint-friendly-formatter"),
    configFile: '.eslintrc'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
    // new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]
}

