import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入子组件
import herolist from '../components/herolist.vue'
import tool from '../components/tool.vue'
import coat from '../components/coat.vue'
import add from '../components/list/add.vue'
import edit from '../components/list/edit.vue'

var router = new Router({
  routes: [
    { path: '/', redirect: '/herolist' },
    { name:'herolist', path: '/herolist', component: herolist },
    { name:'tool', path: '/tool', component: tool },
    { name:'coat', path: '/coat', component: coat },
    { name:'add', path: '/add', component: add },
    { name:'edit', path: '/edit/:id', component: edit }
  ]
})
export default router
