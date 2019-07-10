const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const BUILD_FOLDER = 'build'

module.exports = {
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'standard-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, '..', '..', BUILD_FOLDER)
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new Dotenv({
      defaults: true,
      path: `./.env.${process.env.NODE_ENV}`
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dashboard',
      favicon: 'src/static/icons/favicon.ico',
      template: 'src/index.html'
    }),
    new CopyPlugin([
      {
        from: path.join(__dirname, '..', '..', 'src', 'static', 'icons'),
        to: path.join(__dirname, '..', '..', BUILD_FOLDER, 'static', 'icons'),
        ignore: ['*.ico']
      },
      {
        from: path.join(__dirname, '..', '..', 'src', 'manifest.json'),
        to: path.join(__dirname, '..', '..', BUILD_FOLDER)
      }
    ]),
    new StyleLintPlugin({
      files: 'src/**/*.js'
    })
  ]
}
