const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const buildPath = path.resolve(__dirname, 'dist');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: buildPath,
    clean: true
  },
  devServer: {
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/about.html',
      inject: true,
      chunks: ['index'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/html/contactUs.html',
      inject: true,
      chunks: ['index'],
      filename: 'contactUs.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from:'src/resources',to:'assets/images/'} 
      ],
    })
  ]
}
