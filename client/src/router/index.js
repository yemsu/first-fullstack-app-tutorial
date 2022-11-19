import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Articles from '../components/Articles.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/:id', component: Articles }
  ]
})

export default router