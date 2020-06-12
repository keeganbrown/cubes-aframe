const {
  entry,
  devtool,
  plugins,
  module: _module,
  resolve,
  output,
} = require('./webpack.config');
const path = require('path');

module.exports = {
  entry,
  devtool,
  plugins,
  module: _module,
  resolve,
  output: {
    path: path.join(__dirname, './docs'),
    filename: '[name].[hash].js',
  },
};
