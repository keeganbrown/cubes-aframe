const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.ts',
    style: './src/css/main.css',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, 'src/index.ejs'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.html'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: (pathData) => {
      return pathData.chunk.name === 'style' ? '[name].css' : '[name].js';
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
