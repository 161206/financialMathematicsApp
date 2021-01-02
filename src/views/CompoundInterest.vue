<template>
<div class="dashboard">
  <v-container fluid class="my-5">
      
      <v-card class=" primary--text">
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs12 sm8 md6 lg6 xl6>
            <div><h2>Compound Interest Calculator</h2></div>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="original principal">original principal: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.principal" name="original principal" type="number" placeholder="Add original principal"  min="0"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="nominal annual interest rate">interest rate: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.rate" name="nominal annual interest rate" type="number" placeholder="Add nominal annual interest rate"  min="0"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center  class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="compound frequency">compound frequency: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2>
            <input v-model="sharedState.compoundFrequency" name="compound frequency" type="number" placeholder="Add compound frequency"  min="0"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
            <label for="Period">Period: </label>
    
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2 >
            <input v-model="sharedState.time" name="Period" type="number" placeholder="Add Period"  min="0"/>
          </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
              <div>
        New Principal:        </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2 text-center>
            {{newPrincipal}}

          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center class="pa-1">
          <v-flex xs8 sm6 md4 lg4 xl4>
              <div >
        Interest Earned:  
      </div>
          </v-flex>
          <v-flex xs4 sm2 md2 lg2 xl2 text-center>
            {{earnedInterest}}

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
        newPrincipal: function () {
          const newPrincipal = this.sharedState.principal * Math.pow(1 + ((this.sharedState.rate / 100) / this.sharedState.compoundFrequency), this.sharedState.compoundFrequency * this.sharedState.time);
          return Math.round(newPrincipal * 100) / 100;
        },
        earnedInterest: function () {
          return Math.round((this.newPrincipal - this.sharedState.principal) * 100) / 100;
        }
      }


}
</script>
