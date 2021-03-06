require('dotenv-safe').load();
const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'axios', 'react', 'react-dom',
  'react-image-gallery', 'react-redux',
  'react-redux-multilingual', 'react-router',
  'react-router-redux', 'redux',
  'redux-thunk'
];

module.exports = {
  devtool: 'eval',
  target: 'web',
  entry: {
    bundle: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS
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
        exclude: /node_modules/
      },
      {
        use: ExtractTextPlugin.extract({
          loader: 'css-loader'
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
  devServer: {
    contentBase: join(__dirname, './dist'),
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://[::1]:3000',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        G_ANALYTICS: JSON.stringify(process.env.G_ANALYTICS)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new ExtractTextPlugin('style.css'),
  ]
};
