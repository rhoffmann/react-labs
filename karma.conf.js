const path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
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
      'karma-webpack',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-mocha'
    ],
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
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
    },
    webpackServer: {
      noInfo: true
    }
  });
};
