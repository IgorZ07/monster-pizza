import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/index/Home.vue'
import Menu from './views/menu/Menu.vue'
import Contact from './views/contact/Contact'
import About from './views/about/About'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/menu', name: 'menu', component: Menu },
  { path: '/contact', name: 'contact', component: Contact }
  // { path: '*', redirect: '/404' }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})

