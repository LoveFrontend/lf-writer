const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const path = require('path')
const express = require('express')
// let content = require('./src/content.lf')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    before(app){
       app.use(express.static('public'))
    },
    hot: true,
    port: 9000,
    // publicPath: '/public/'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    // publicPath: '/public/'
    // publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.lf$/,
        use: [
          {
            loader: 'raw-loader'
          }
        ]
      },
      { test: /\.(hbs|handlebars)$/, loader: "handlebars-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/example.hbs',
      inject: false
    }),
    // new HtmlReplaceWebpackPlugin([
    //   {
    //     pattern: 'Good',
    //     replacement: content
    //   },
    // ])
  ]
}