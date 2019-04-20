import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// // custom directive
// Vue.directive("rainbow", {

// });

// Vue.directive("theme", {
//   bind(el, binding, vnode){
//     if(binding.value == 'wide'){
//       el.style.maxWidth = "1200px"
//     }else if(binding.value== 'narrow'){
//       el.style.maxWidth = '500px'
//     }
//     if(binding.arg == 'column'){
//       el.style.background= '#ddd';
//       el.style.padding= '20px';
//     }
//   }
// });

// Vue.filter('snippet', function(value){
//   return value.slice(0,100)+'...';
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
