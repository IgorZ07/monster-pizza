import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/Home.vue'
import Contact from './views/contact/Contact'


const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/contact', name: 'contact', component: Contact }
  // { path: '*', redirect: '/404' }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})

