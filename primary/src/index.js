// import './style.css'
// console.log('aaaaa')
// var button = document.createElement('button');
// button.innerHTML = '新增'
// document.body.appendChild(button)
// button.onclick = function() {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div)
// }

import counter from './counter'
import number from './number';
counter()
number()

if(module.hot){
  module.hot.accept('./number.js',()=>{
    document.body.removeChild(document.getElementById('number'));
    number()
  })
}
