<template>
  <div class="shopping-list"> 
    <v-card>
      <v-list dark >
        <v-list-item class="shopping-about">
          Super Hero (from <a class="ml-1" href="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json">
          mdn.github.io/learning-area/javascript/oojs/json/superheroes.json</a>) 
        </v-list-item>
        <v-list-item class="shopping-about"> Super Hero Products: <strong id="quantity"> {{numberProducts}}</strong>
        </v-list-item>
      </v-list>
    </v-card>
    <div class="shop" v-for="(product,i) in products" :key="i">
      <div >NAME: {{product.name}}</div>
      <div>PRICE: ${{product.age}}</div>
      <div>{{product.count}}</div>
      <div>
        <v-btn v-if="product.count" @click="removeFromCart(product)" fab dark small color="primary">
          <v-icon dark>mdi-minus</v-icon>
        </v-btn> 
        <v-btn class="ml-4" @click="addToCart(product)" fab dark small color="primary">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>  
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'shopping',
  computed: {
    ...mapGetters(["products","numberProducts"]),
  },
  methods: {
    ...mapActions(["fetchProducts","addToCart","removeFromCart","getProducts"]),
  },
  async mounted() { this.fetchProducts()},
}
</script>

<style>
.shopping-list {
  background-color: black;
  
}
.shopping-about {
    justify-content: center;
    display: flex;
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
.number {
  width:10%;
  text-align: center
}
</style>