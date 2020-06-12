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
    filename: (pathData) => {
      return pathData.chunk.name === 'style' ? '[name].css' : '[name].js';
    },
  },
};
