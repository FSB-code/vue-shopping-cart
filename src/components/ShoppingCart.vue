<template>
  <div class="cart" v-if="cartProducts.length">
    <table>
      <thead>
        <tr>
          <td>NUMBER</td>
          <td>NAME</td>
          <td>PRICE</td>
          <td>QUANTITY</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product,index) in cartProducts" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ product.name }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td class="cross" @click.prevent="deleteProduct()">X</td>
          </tr>
          <tr class="green">
            <td><b>TOTAL:</b></td>
            <td></td>
            <td></td>
            <td><b>${{ total }}</b></td>
          </tr>
      </tbody>
      </table>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cartProducts']),
    total() {
      return this.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity
      },0)
    },
  },
  methods:{
    ...mapActions(["deleteProduct"])
  }
}
</script>

<style>
table {
  background-color: black;
  width: 100%;
  height: 300px;
  border: 30px solid black;
}
thead {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;
  font-size:20px
}
tbody {
  background-color: white;
}
.cross {
  color:#42b983;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;
}
.green {
  background-color: #42b983;
  font-size: 20px;
}
</style>