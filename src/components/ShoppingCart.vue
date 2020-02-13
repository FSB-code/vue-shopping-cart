<template>
  <div class="cart">
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
        <tr v-for="(product,index) in products" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ product.name }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td><div><a href="#" id="cross" @click.prevent="removeProduct()"><strong>X</strong></a></div></td>
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
    ...mapGetters({
      products: 'cartProducts'
    }),
    total () {
      return this.products.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
  },
  methods:{
    ...mapActions(["removeProduct"])
  }
}
</script>

<style>
table {
  background-color: black;
  width:100%;
  height: 500px;
  border-radius: 100px;
  border:50px solid black;
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
#cross {
  color:#42b983;
  font-size: 25px;
  text-decoration: none
}
.green {
  background-color: #42b983;
  font-size: 20px;
}
</style>