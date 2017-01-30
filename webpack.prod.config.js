const webpack = require('webpack');
const { join } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom', 'react-redux',
  'react-redux-multilingual', 'react-router',
  'react-router-redux', 'redux', 'redux-pack',
  'redux-promise-middleware', 'semantic-ui-react',
  'react-slick'
];

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].[hash].js',
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
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ExtractTextPlugin('style.css'),
    new BundleAnalyzerPlugin({
      analyzerPort: 9001
    })
  ]
};
