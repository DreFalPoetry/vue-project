const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode:'production',//模式 -- 开发环境 --生产环境
  devtool:'cheap-module-source-map',
}

module.exports = merge(commonConfig,prodConfig)
