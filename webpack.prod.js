const {
  entry,
  devtool,
  plugins,
  module,
  resolve,
  output,
} = require('./webpack.config');

module.exports = {
  entry,
  devtool,
  plugins,
  module,
  resolve,
  output: {
    path: path.join(__dirname, './docs'),
    filename: '[name].js',
  },
};
