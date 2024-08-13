const path = require('path');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.js'), 
  target: 'node', 
  externals: [nodeExternals()], 
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'], 
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@services': path.resolve(__dirname, 'src', 'services'),
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
};
