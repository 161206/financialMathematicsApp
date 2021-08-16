<template>
<div class="dashboard">
  <v-container fluid class="my-5">
      
      <v-card  class=" primary--text">
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs12 sm8 md6 lg6 xl6>
            <div><h2>Mortgage Calculater</h2></div>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="original principal">original principal: </label>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.principal" name="original principal" type="number" placeholder="Add original principal" min="0" />
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="annual interest rate">interest rate: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.rate" name="annual interest rate" type="number" placeholder="Add annual interest rate" min="0" />
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="compound frequency">compound frequency: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.compoundFrequency" name="compound frequency" type="number" placeholder="Add number of months" min="0" />
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <div>
        monthly payment:  
      </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            {{monthlyPayment}}
          </v-flex>
        </v-layout>
        
      </v-card>

    </v-container>
</div>
</template>

<script>
import {store} from './store.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      sharedState: store.state}
   },
  computed:{
        monthlyPayment: function () {
            const i =(this.sharedState.rate/100)/12;
          const amount = (this.sharedState.principal*i*Math.pow(1+i,this.sharedState.compoundFrequency))/(Math.pow(1+i,this.sharedState.compoundFrequency)-1);
          return Math.round(amount * 100) / 100;
        }
      }


}
</script>
<style scoped>


</style>