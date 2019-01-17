import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import DemoBasic from './views/basic/DemoBasic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/about',name: 'about',component: About},
    {path: '/basic/demo-basic',name: 'demo-basic',component: DemoBasic},
  ]
})
