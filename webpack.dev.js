const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: '8080',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      BASE_PREFIX: JSON.stringify('/'),
      BASE_API_URL: JSON.stringify('0.0.0.0:80'),
    }),
    new webpack.NamedModulesPlugin(),
  ],
  mode: 'development',
});
