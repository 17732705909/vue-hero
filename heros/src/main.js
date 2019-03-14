import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
// 引入bootstrap静态文件
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// 引入自定义样式
import './assets/css/index.css'
import './assets/css/common.css'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
