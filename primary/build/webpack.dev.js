const webpack = require('webpack')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode:'development',//模式 -- 开发环境 --生产环境
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase:'../dist',
    open:true,
    port:8888,
    hot:true,
  },
  module:{
    rules:[
      {
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
      },{
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader' 
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
   
  },
  output: {
    filename:'[name].js',
    chunkFilename:'[name].chunk.js',
  },
}



module.exports = merge(commonConfig,devConfig)