<template>
<div class="dashboard">
  <v-container fluid class="my-5">
      
      <v-card class=" primary--text">
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs12 sm8 md6 lg6 xl6>
            <div><h2>Annuity Due Present Value Calculator</h2></div>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="Payment:">Periodic Cash Flows: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.payment" name="Payment:" type="number" placeholder="Add Periodic Cash Flows"  min="0"/>
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
        present value of an annuity due:  
      </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            {{presentValue}}
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
        presentValue: function () {
          const presentValue  =this.sharedState.payment+this.sharedState.payment*((1-Math.pow(1+this.sharedState.rate/100,1-this.sharedState.time))/this.sharedState.rate/100);
          return Math.round(presentValue * 100) / 100;
        }
      }


}
</script>
