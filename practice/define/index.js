import Vue from 'vue';

const component = {
  props:{
    active:Boolean,
    propOne:String
  },
  template:'<div>{{text}}</div>',
  data(){
    return {text:123} 
  }
}

// Vue.component('Comp',component)

new Vue({
  components:{
    CompOne:component
  },
  el:'#root',
  template:'<comp-one :active="true" prop-one="text1"/>'
})