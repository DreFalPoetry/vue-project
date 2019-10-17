## webpack learn
webpack在前段工程化中饰演重要的角色

webpack is a module boundler  【模块打包工具】

loader ==> 识别非js结尾的模块  执行顺序【从上到下，从右到左】

#### htmlWebpackPlugin 插件 : 在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个html中

#### CleanWebpackPlugin 插件，每次打包之前删除打包文件

#### plugin   在webpack运行到某个时刻的时候帮你做一些事情

#### sourceMap:错误信息的映射

#### webpackDevServer：webpack.config中设置 devServer

1. 借助webpack --watch 监控webpack打包的代码更新，但是不会启动服务器
2. webpack-dev-server 在webpack.config.js 中做配置，启动服务器，监控webpack打包代码更新
3. server 手写webpack server命令，通过node文件设置监听打包代码变化

#### HMR: Hot Module Replacement 

##### 文档查阅：

##### 1. Guides --> Hot Module Replacement   API-->Hot Module Replacement  Concept --> Hot Module Replacement

#### 使用babel处理es6语法

1. babel官方网站 setup webpack 

2. 引入babel/polyfill 转化es6语法为es5

3. 添加useBuiltIns

4. 为了不污染全局环境 使用 runtime来配置

#### 使用 babel/preset-react 支持react语法

#### Tree shaking 

代码引入如果没有用到的话不打包-- 在webpack.config.js中的开发环境配置

```js
optimization:{
    usedExports:true 
}
```

设置package.json文件，添加

```js
"sideEffects":false,
```

#### development模式和production模式的区分打包

创建webpack.dev.js和webpack.product.js分别应对生产环境和开发环境

#### webpack 和 code  splitting

> ##### 在一些场景中，要对代码进行拆分，提高加载速度，提升代码执行性能

同步代码做代码分割，在webpack.config.js中，配置optimization

```js
optimization:{
    splitChunks:{
      chunks:'all'
    }
  }
```

或者第二种方式， 无需进行配置，是在项目中异步加载的时候：

```js
function getComponent(){
  return import('lodash').then(({default:_})=>{
    var element = document.createElement('div')
    element.innerHTML = _.join(['Dell','Lee'],'-')
    return element
  })
}

getComponent().then(element=>{
  document.body.appendChild(element)
})
```

官网详情：plugins ==> SplitChunksPlugin

#### Lazy Loading懒加载，Chunk是什么？

懒加载：通过import异步的加载模块，在执行import语法的时候，模块才会被载入，使页面加载的速度更快

```js
async function getComponent(){
  const {default:_} = await import(/*webpackChunkName:"lodash"*/ 'lodash');
    var element = document.createElement('div')
    element.innerHTML = _.join(['Dell','Lee'],'-')
    return element
}

document.addEventListener('click',()=>{
  getComponent().then(element=>{
    document.body.appendChild(element)
  })
})
```

chunk：打包生成的文件

#### 打包分析，preloading,prefetching

使用打包分析软件

使用webpackPrefetch进行预加载文件做性能优化













