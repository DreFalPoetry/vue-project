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
    path: path.resolve(__dirname,'../dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'src/index.html'
    }),
  ],
  optimization:{
    splitChunks: {
      chunks: 'all',
      minSize: 30000,//大于30kb时做代码分割
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {//缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename:'vendors.js'
        },
        default:{
          priority: -20,
          reuseExistingChunk: true,
          filename:'common.js'
        }
      }
    }
  }
}