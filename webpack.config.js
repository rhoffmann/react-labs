'use strict';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.NODE_ENV || "dev";
  // npm_lifecycle_event;

require('dotenv').config();
const GITHUB_TOKEN = process.env.GITHUB_OAUTH_TOKEN;

process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: __dirname + '/src',
  entry: './src/main.js',
  dist: __dirname + '/public'
};


const common = {

  entry: PATHS.entry,

  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
    chunkFilename: '[id].chunk.js',
    publicPath: '/',
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: PATHS.app
        // entry: PATHS.entry,
        // exclude: /(node_modules|bower_components)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        include: PATHS.app,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'survivejs-kanban']
        }
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
  }
};

let config;

if (TARGET === 'production') {
  config = merge(common, {
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  });
} else {
  config = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.dist,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true
      })
    ]
  });
}

module.exports = config;

