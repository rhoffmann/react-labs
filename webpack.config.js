'use strict';

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const TARGET = process.env.NODE_ENV || "dev"; // this is important for .babelrc hmre
process.env.BABEL_ENV = TARGET;

// require('dotenv').config();
// const GITHUB_TOKEN = process.env.GITHUB_OAUTH_TOKEN;

const PATHS = {
  app: __dirname + '/src',
  entry: __dirname + '/src/main.js',
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
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.app,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'survivejs-kanban']
        }
      },
      {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader', 'postcss-loader'),
        loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    // alias:{ // use to alias require and import paths in js
    //   app: path.resolve(__dirname, 'src')
    // },
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
    configFile: '.eslintrc'
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src")]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ]
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
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

module.exports = config;
