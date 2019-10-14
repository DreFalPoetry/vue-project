// import '@babel/polyfill';

//测试es6语法是都通过babel转译
const array = [1,2,3]
const isES6 = () => console.log(...array)
isES6()

const arr = [new Promise(()=>{}),new Promise(()=>{})]
arr.map(item => {console.log(item)})

//es6
import sum from './vendor/sum';
console.log('sum(1,2) = ',sum(1,2))

//commonjs
var minus = require('./vendor/minus');
console.log('minus(1,2) = ',minus(1,2))

//amd
require(['./vendor/multi'],function(multi){
  console.log('multi(1,2)=',multi(1,2))
})
