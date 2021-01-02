<template>
<div class="dashboard">
  <v-container fluid class="my-5">
      
      <v-card  class=" primary--text">
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs12 sm8 md6 lg6 xl6>
            <div><h2>Annuity Present Value Solve For N Calculator</h2></div>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="principal:">Future Value of Annuity: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.principal" name="principal:" type="number" placeholder="Add Present Value of Annuity"  min="0"/>
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
            <label for="payment">payment: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.payment" name="payment" type="number" placeholder="Add payment"  min="0"/>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <div>
        Number Of Periods:  
      </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            {{numberOfPeriod}}
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
        numberOfPeriod: function () {
          const numberOfPeriod  =(Math.log(Math.pow((1-((this.sharedState.principal*(this.sharedState.rate/100))/this.sharedState.payment)),-1))/Math.log(1+(this.sharedState.rate/100)));
          return Math.round(numberOfPeriod * 100) / 100;
        }
      }


}
</script>
