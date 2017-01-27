require('dotenv-safe').load();

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom', 'react-redux',
  'react-redux-multilingual', 'react-redux-toastr',
  'react-router', 'react-router-redux', 'redux',
  'redux-auth-wrapper', 'redux-form', 'redux-pack',
  'redux-persist', 'redux-promise-middleware',
  'semantic-ui-react', 'react-slick'
];

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    quiet: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CLOUD_NAME: JSON.stringify(process.env.CLOUD_NAME),
        UPLOAD_PRESET: JSON.stringify(process.env.UPLOAD_PRESET),
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
  ]
};
