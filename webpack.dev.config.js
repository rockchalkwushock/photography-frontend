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
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: join(__dirname, 'dist'),
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
    contentBase: join(__dirname, 'dist'),
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
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
