const path = require('path')
module.exports = {
  mode:'production',
  entry:'./src/index.js',
  externals:'lodash',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'library.js',
    library:'library',
    libraryTarget:'umd'
  }
}