import Vue from 'vue';

const app = new Vue({
  // el:'#root',
  // template:'<div>{{text}}</div>',
  data:{
    text:0
  },
  beforeCreate(){
    console.log(this.$el,'beforeCreate')
  },
  created(){
    console.log(this.$el,'created')
  },
  beforeMount(){
    console.log(this.$el,'beforeMount')
  },
  mounted(){
    console.log(this.$el,'mounted')
  },
  beforeUpdate(){
    console.log(this,'beforeUpdate')
  },
  updated(){
    console.log(this,'updated')
  },
  activated(){//在组件章节讲解
    console.log(this,'activated')
  },
  deactivated(){//在组件章节讲解
    console.log(this,'deactivated')
  },
  beforeDestroy(){
    console.log(this,'beforeDestroy')
  },
  destroyed(){
    console.log(this,'destroyed')
  },
  render(h){
    console.log('render')
    throw new TypeError('render error')
    return h('div',{},this.text)
  },
  renderError(h,err){
    return h('div',{},err.stack)
  }
})

app.$mount('#root')
// setInterval(() => {
//   app.text += 1 
// }, 3000);

setInterval(() => {
  app.$destroy()
}, 1000);