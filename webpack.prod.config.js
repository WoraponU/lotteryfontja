const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
require('dotenv').config();

module.exports = Merge(CommonConfig, {
  devtool: 'source-map',
  entry: {
    app: [
      'normalize.css',
      './client/index'
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,      
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      comments: false,
      minimize: false
    }),
    new LodashModuleReplacementPlugin({
      'caching': true,
      'collections': true,
      'paths': true
    }),
    // new webpack.optimize.CommonsChunkPlugin({ 
    //   name: 'vendors', 
    //   filename: '[name].js',
    //   minChunks: Infinity 
    // }),
  ],
})