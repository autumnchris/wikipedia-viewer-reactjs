const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 1000000,
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use:['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
