## VUE 整体化学习

阅读  基础  --》 介绍章节 

## MVVM 设计模式 

Model  View ViewModel

虚拟dom  definePropertice

#### 前端组件化

页面由整体切分为部分，合理拆分组件

## vue生命周期函数

Vue实例章节

生命周期函数就是vue实例在某个时间点会自动执行的函数

```js
	  beforeCreate(){
        console.log('beforeCreate')
      },
      created(){
        console.log('created')
      },
      beforeMount(){
        console.log(this.$el)
        console.log('beforeMount')
      },
      mounted(){
        console.log(this.$el)
        console.log('mounted')
      },
      beforeDestroy(){
        console.log('beforeDestory')
      },
      destroyed(){
        console.log('destoryed')
      },
      beforeUpdate(){
        console.log('beforeupdate')
      },
      updated(){
        console.log('updated')
      }
```



