const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main:'./src/index.js',
  },
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
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: "babel-loader",
      // options:{
        // presets:[ ["@babel/preset-env",{
        //   targets: {
        //     chrome: "67",
        //   },
        //   useBuiltIns: 'usage'
        // }] ]
        // "plugins": [[
        //   "@babel/plugin-transform-runtime",
        //   {
        //     "absoluteRuntime": false,
        //     "corejs": 2,
        //     "helpers": true,
        //     "regenerator": true,
        //     "useESModules": false
        //   }
        // ]]
      // }
    }]
  },
  output: {
    // publicPath:'/',
    filename:'[name].js',
    chunkFilename:'[name].chunk.js',
    path: path.resolve(__dirname,'../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
  ],
  optimization:{
    usedExports:true,
    splitChunks: {
      chunks: 'all',
    }
  }
}