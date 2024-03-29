const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 模式 -- 开发环境 --生产环境
  devtool: 'cheap-module-eval-source-map',
  // 线上的 devtool 'cheap-module-source-map'
  entry: {
    main: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8888,
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    proxy: {
      '/react/api': {
        target: 'http://www.dell-lee.com',
        secure: false,
        pathRewrite: {
          'header.json': 'demo.json',
        },
        changeOrigin: true,
        headers: {
          host: 'www.dell-lee.com',
          cookie: 'sfdsfdf',
        },
      },
    },
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 2048,
        },
      },
    }, {
      test: /\.(eot|ttf|woff|svg)$/,
      use: {
        loader: 'file-loader',
      },
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // modules:true
          },
        },
        'sass-loader',
        'postcss-loader',
      ],
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
      ],
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ['babel-loader'],
    }],
  },
  output: {
    // publicPath:'/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
