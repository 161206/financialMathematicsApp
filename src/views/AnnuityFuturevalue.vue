<template>
<div class="dashboard">
  <v-container fluid class="my-5">
      
      <v-card class=" primary--text">
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs12 sm8 md6 lg6 xl6>
            <div><h2>Future Value of Annuity Calculator</h2></div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="Payment:">Payment: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.payment" name="Payment:" type="number" placeholder="Add Payment"  min="0"/>
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
        Future value:  
      </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            {{futureValue}}
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
        futureValue: function () {
          const futureValue  =this.sharedState.payment*((Math.pow(1+(this.sharedState.rate/100),this.sharedState.time)-1)/(this.sharedState.rate/100));
          return Math.round(futureValue * 100) / 100;
        }
      }


}
</script>
