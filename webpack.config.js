const path = require('path');
const Webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

let config = {
  target:'web',//编译目标为web平台
  entry: path.join(__dirname,'src/index.js'),
  output: {
    filename:'boundle.js',
    path:path.join(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },{
        test: /\.jsx$/,
        loader: 'babel-loader'
      },{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test:/\.styl/,
        use:[
          'style-loader',
          'css-loader',
          {
            loader:'postcss-loader',
            options:{
              sourceMap:true
            }
          },
          'stylus-loader'
        ]
      },{
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024, // 判断图片的大小   如果小于1024就会转换成base64
            name: '[name].[ext]' // 输出图片的名字  ext是扩展名
          }
        }]
      }
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process-env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HtmlPlugin()
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map',//代码映射，调试代码为原代码
  config.devServer = {
    port: 8088, // webpack服务需要监听的端口号
    host: '0.0.0.0', // 可以通过本机内网ip访问,这样别人也可以访问,手机也可访问,如果设置成localhost则不然
    overlay: {
      errors: true // 这个可有可无,webpack编译出现的错误会出现在网页中,便于更改
    },
    hot:true,//热加载--页面部分刷新不用刷新浏览器
    // historyFallback:{//地址隐射

    // }
  };
  config.plugins.push(
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config