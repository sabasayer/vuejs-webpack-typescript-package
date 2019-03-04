var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.config.base');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

var outputFile = 'my-lib';
var globalName = 'MyLib';

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: [
    nodeExternals(),
    {
      // Put external libraries like lodash here
      // With their global name
      // Example: 'lodash': '_'
      vue: 'vue',
      'vue-property-decorator': 'vue-property-decorator'
    }],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
});
