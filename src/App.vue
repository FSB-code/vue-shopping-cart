<template>
  <div id="app">
    <h1 class="title">Shopping-cart (VueJS + Vuex)</h1>
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'app',
  components: {
  Navigation 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title {
  background-color:black;
  color:white;
}
</style>
