const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  module:{
    rules:[{
      test:/\.(jpg|png|gif)$/,
      use:{
        loader:'url-loader',
        options:{
          name: '[name]_[hash].[ext]',
          outputPath:'images/',
          limit:2048
        }
      }
    },{
      test:/\.(eot|ttf|woff|svg)$/,
      use:{
        loader:'file-loader',
      }
    },{
      test:/\.scss$/,
      use: [
        'style-loader',
        {
          loader:'css-loader',
          options:{
            importLoaders:2,
            // modules:true
          }
        }, 
        'sass-loader',
        'postcss-loader' 
      ]
    }]
  },
  output: {
    filename:'bundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'src/index.html'
    })
  ]
}