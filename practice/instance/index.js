import Vue from 'vue';
const app = new Vue({
  // el:'#root',
  data:{
    text:0,
    obj:{}
  },
  // watch:{
  //   text(newText,oldText){
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // },
  template:'<div ref="adiv">{{text}} {{obj.a}}</div>',
})

app.$mount('#root')

let i = 0;
setInterval(() => {
  i++;
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // app.obj.a = i
  // app.$set(app.obj,'a',i)
  // app.$forceUpdate()
  // app.$options.data.text += 1
  // app.$data.text+=1
}, 1000);

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options);

// app.$options.render = (h) => {
//   return h('div',{},'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children);
// console.log(app.$slots)
// console.log(app.$scopedSlots);
// console.log(app.$refs);
// console.log(app.$isServer)

// const unwatch = app.$watch('text',(newText,oldText)=>{
//   console.log(`${newText} : ${oldText}`)
// })

// setInterval(() => {
//   unwatch()
// }, 2000);

// app.$once
// app.$on('test',(a,b)=>{
//   console.log('test emit',a,b)
// })
// app.$emit('test',1,2)

