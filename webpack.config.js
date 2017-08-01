const path = require('path')
const webpack = require('webpack')
const context = path.resolve(__dirname, 'src')

const customModule = {
  css: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      }
    },
    'resolve-url-loader',               
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
  ],
  scss: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    'resolve-url-loader',     
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    },
  ]
};

module.exports = {
  devtool: 'eval-source-map',
  context,
  entry: {
    app: [
      'react-hot-loader/patch',
      'normalize.css',
      './index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      Lib: path.resolve(context, 'lib'),
      Actions: path.resolve(context, 'actions'),
      Middlewares: path.resolve(context, 'middlewares'),
      Containers: path.resolve(context, 'containers'),
      Components: path.resolve(context, 'components'),
      Theme: path.resolve(context, 'theme'),
      Langs: path.resolve(context, 'langs'),
      Hocs: path.resolve(context, 'hocs')
    },
    extensions: [".js", ".json", ".scss"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, use: customModule.css },
      { test: /\.scss$/, use: customModule.scss },
      { test: /\.fs$/, use: customModule.scss },
      { test: /\.(jpg|png)$/, loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // node: {
  //   fs: 'empty',
  //   tls: 'empty',
  //   net: 'empty',
  //   child_process: 'empty',
  //   dns: 'empty'
  // },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}