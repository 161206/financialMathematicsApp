<template>
<div class="dashboard">
  <v-container fluid class="my-5">
      
      <v-card class=" primary--text">
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs12 sm8 md6 lg6 xl6>
            <div><h2>Annuity Payment Calculator (FV)</h2></div>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="futurevalue:">future value: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.futurevalue" name="futurevalue:" type="number" placeholder="Add future value" min="0" />
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="nominal annual interest rate">Rate Per Period: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.rate" name="nominal annual interest rate" type="number" placeholder="Add nominal annual interest rate"  min="0"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="Period">Number of Periods: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.time" name="Period" type="number" placeholder="Add Period"  min="0"/>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <div>
        Payment:  
            </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            {{payment}}
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
        payment: function () {
          const payment  =(this.sharedState.rate*this.sharedState.futurevalue)/(Math.pow(1+this.sharedState.rate/100,this.sharedState.time)-1);
          return Math.round(payment * 100) / 100;
        }
      }


}
</script>
