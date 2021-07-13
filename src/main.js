import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-chalk';
import axios from 'axios'



Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  headers: {
    Authorization: window.sessionStorage.getItem('token')
  },
  baseURL: 'http://192.168.137.1:3002/api'
})



router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
