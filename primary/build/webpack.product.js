const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode:'production',//模式 -- 开发环境 --生产环境
  devtool:'cheap-module-source-map',
  module:{
    rules:[
      {
        test:/\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      },{
        test:/\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader' 
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].chunk.css'
    }),
  ],
}

module.exports = merge(commonConfig,prodConfig)
