<template>
    <div class="shopping">
      <h2>STAR WARS API Starships Products: <strong id="quantity">{{getNumberOfProducts}}</strong></h2>
          <div class="shop" v-for="(product,index) in allProducts" :key="index">
            <div>NAME: {{product.name}}</div>
            <div>MODEL: {{product.model}}</div>
            <div>PRICE: ${{product.cost_in_credits}}</div>
            <div>
              <button class="button" @click="removeFromCart(product)">Remove from cart</button>
              <button  class="button" @click="addToCart(product)">Add to cart</button>
          </div>  
        </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'shopping',
  computed: mapGetters(["allProducts","getNumberOfProducts","cartProducts","count"]),
  methods: mapActions(["fetchProducts","addToCart","removeFromCart"]),
  async mounted() {this.fetchProducts()},
}
</script>

<style>
.shopping {
  background-color: black;
}
h2 {
  color: white;
}
#quantity {
  color: #42b983;
}
.shop {
  font-family:serif;
  border:2px solid rgb(204, 204, 204);
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:22%;
  height: 200px;
  margin: 10px;
  background-color: #42b983;
}
.button {
  background-color: rgb(75, 75, 235);
}
.number {
  width:10%;
  text-align: center
}
</style>