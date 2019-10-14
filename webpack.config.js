const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry:{
    app:'./app.js'
  },
  output:{
    publicPath:__dirname + '/dist/',
    path:path.resolve(__dirname,'dist'),
    filename:'boundle.js'
  },
  plugins: [
    new CleanWebpackPlugin() // 默认情况下，此插件将删除 webpack output.path目录中的所有文件，以及每次成功重建后所有未使用的 webpack 资产。
  ]
}