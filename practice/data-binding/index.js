import Vue from 'vue'


new Vue({
  el:'#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div :class="[isActive?'active':'']">
      <p v-html="html"></p>
    </div>
  `,
  data:{
    isActive:false,
    arr:[1,2,3],
    html:'<span>233</span>',
    aaa:'main'
  },
  methods:{
    handleClick(){
      alert('clicked')
    }
  }
})