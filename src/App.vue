<template>
  <v-app class="grey lighten-4">
    <navbar />
    <v-content class="mx-4 mb-4">
      <router-view ></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
data () {
  return {

  }
}}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #DD2C00;
  background-color: maroon;
  font-size: 13pt;
}
input{ text-align: center; color: #1A237E;}

</style>