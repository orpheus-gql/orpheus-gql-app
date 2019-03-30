const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('./client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, 
    ]
  },
  devServer: {
    publicPath: '/build',
    contentBase: './',
    proxy: {
      context: ['/api/user', '/login', '/signup', '/logout'],
      target: 'http://localhost:3000',
      secure: false,
      port: 8080,
      hot: true
    }
  },
};