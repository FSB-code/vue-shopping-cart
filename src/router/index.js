import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingList from '../components/ShoppingList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShoppingList ',
    component: ShoppingList
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import('../components/ShoppingCart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
