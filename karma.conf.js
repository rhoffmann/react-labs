const path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS' /* ,'Chrome',  'Safari', 'Firefox' */],
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter'
    ],
    reporters: ['mocha'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        noParse: [
          /node_modules\/sinon/,
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react', 'es2015', 'survivejs-kanban']
            }
          },
        ]
      },
      resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx']
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
