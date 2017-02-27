const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom',
  'react-image-gallery', 'react-redux', 'react-router',
  'react-router-redux', 'redux', 'redux-form',
  'redux-thunk', 'styled-components'
];

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: {
    bundle: [
      'babel-polyfill',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: ['css-loader', 'postcss-loader']
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name="[name]-[hash].[ext]"',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './client/manifest.json', to: 'manifest.json' }
    ]),
    new ExtractTextPlugin('styles.css'),
    new SWPrecacheWebpackPlugin({
      staticFileGlobs: [
      'src/styles/styles.css',
     ],
      stripPrefix: 'src/static/',
      mergeStaticsConfig: true,
      staticFileGlobsIgnorePatterns: [/\.map$/],
    }),
    new OfflinePlugin()
  ]
};
