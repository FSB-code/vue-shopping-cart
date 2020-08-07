import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingList from '../components/ShoppingList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

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
    component: ShoppingCart
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
