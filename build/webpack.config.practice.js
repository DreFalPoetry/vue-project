const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const VueClientPlugin = require('vue-server-renderer/client-plugin')
// const cdnConfig = require('../app.config').cdn

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "development"
    }
  }),
  new HTMLPlugin({
    template:path.join(__dirname,'template.html')
  }),
  new VueLoaderPlugin(),
]

const devServer = {
  port: 8089,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: {
    index: '/public/index.html'
  },
  proxy: {
    '/api': 'http://127.0.0.1:3333',
    '/user': 'http://127.0.0.1:3333'
  },
  hot: true
}

let config = merge(baseConfig, {
  mode:'development',
  entry:path.join(__dirname,'../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  resolve:{
    alias:{
      'vue':path.join(__dirname,'../node_modules/vue/dist/vue.min.js')
    },
  },
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
