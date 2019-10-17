// async function getComponent(){
//   const {default:_} = await import(/*webpackChunkName:"lodash"*/ 'lodash');
 
//     return element
// }

document.addEventListener('click',()=>{
  // var element = document.createElement('div')
  // element.innerHTML = "Dell Lee"
  // document.body.appendChild(element)
  // getComponent().then(element=>{
  
  // })
  import(/* webpackPrefetch: true */  './click').then(({default:func})=>{
    func()
  })
})

