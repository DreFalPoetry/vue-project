//es module 模块引入方式
//commonjs 模块引入规范 CMD AMD 规范等
//webpack 模块打包工具 -- 最早是js的模块打包工具 --> 打包任何形式的模块
// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content';

//commonJs语法引入
var Header = require('./header'); //commonJs引入方式
var Sidebar = require('./sidebar'); //commonJs引入方式
var Content = require('./content'); //commonJs引入方式

new Header()
new Sidebar()
new Content()

