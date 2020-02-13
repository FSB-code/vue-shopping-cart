<template>
    <div id="navig">
      <router-link to="/">Shopping List</router-link> |
      <router-link to="/cart">Shopping Cart: <strong id="sum" v-if="itemsInCart >= 0">{{itemsInCart}}</strong></router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'navig',
    computed: {
      ...mapGetters({
      cart: 'cartProducts'
    }),
    itemsInCart(){
      return this.cart.reduce((accum, item) => accum + item.quantity, 0) 
    },
  }
}
</script>

<style>
#navig {
  padding: 30px;
  background-color:black
}
#navig a {
  font-weight: bold;
  color: #ffffff;
}
#navig a.router-link-exact-active {
  color: #42b983;
}
#sum {
  color: #42b983;
}
</style>