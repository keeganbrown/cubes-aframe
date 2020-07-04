const { ...configValues } = require('./webpack.config');
const path = require('path');
const plugins = configValues.plugins;

module.exports = {
  ...configValues,
  plugins,
  mode: 'production',
  output: {
    path: path.join(__dirname, './docs'),
    filename: '[name].[hash].js',
  },
};
