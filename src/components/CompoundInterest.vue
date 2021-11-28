<template>
    <div class="calculator-container">
        <v-container class="mx-5">
            <v-row warp>
                <v-col cols="6">
                    <v-card  class="ma-3" color="blue-grey lighten-5">
                        <v-layout row justify-center class="mx-3">
                            <h2>Compound Interest Calcutator</h2>
                        </v-layout>
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text ">  Original Principal:</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="Amount" v-model="sharedState.principal"
                                prefix="$" type="number" min='0'>
                                </v-text-field>
                             </v-col>
                        </v-layout>
                        
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text "> Interest rate:</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="" v-model="sharedState.rate"
                                prefix="" type="number" min='0'>
                                </v-text-field>
                             </v-col>
                        </v-layout>
                       <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text ">  compound frequency:</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="" v-model="sharedState.compoundFrequency"
                                prefix="" type="number" min='0'>
                                </v-text-field>
                             </v-col>
                        </v-layout>
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text "> Period:</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="" v-model="sharedState.time"
                                prefix="" type="number" min='0'>
                                </v-text-field>
                             </v-col>
                        </v-layout>
                        
                        <!-- buttons -->
                        <v-layout row class="mx-3">
                            <v-col cols="6">
                                <v-btn rounded color="indigo" dark @click="calculate">
                                    <h3>Calculate</h3>
                                </v-btn>
                            </v-col>
                            <v-col cols="6">
                                <v-btn rounded color="indigo" dark @click="reset">
                                    <h3>Reset</h3>
                                </v-btn>
                             </v-col>
                        </v-layout>

                    </v-card>
                </v-col>
                <v-col cols="6" >
                    <v-card flat class="ma-3 text-center ">
                        <div class="calculator-result">
                            <h2>New Principal:</h2>
                            <p class="label-monthly-payment">{{ newPrincipal }}</p>
                            <br>
                            <h2>Interest Earned:</h2>
                            <p class="label-monthly-payment">{{ earnedInterest }}</p>
                            
                        </div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>
<script>
import {store} from '@/views/store.js'

export default {
    components: {
    },
    mounted() {
        this.calculate();
    },
    data(){
        return {
              sharedState: store.state
        }
    },
    methods: {      
        reset() {
            this.sharedState.principal = null;
            this.sharedState.rate = null;
            this.sharedState.compoundFrequency = null;
            this.sharedState.time = null;
        },
        calculate() {
            
            
        },  
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
<style lang="scss" scoped>
.prefix, .sufix,.text-field, input {
    font-size: 1.2em;
    font-weight: bold;
}

.calculator {
    width: 100%;
    margin: 0 0 20px;
    padding: 0;
    border: 1px solid border_color;
    > div {
        display: inline-block;
        width: 50%;
        padding: 20px;
        vertical-align: top;
    }
}

.calculator-form {
    background-color: secondary;
}

.calculator-result {
    text-align: center;
}

.input-duration {
    width: calc(100% - 140px);
    display: inline-block;
}

.input-interest {
    width: 120px;
    display: inline-block;
}
.input-date {
    width: calc(100% - 160px);
    display: inline-block;
    vertical-align: top;
    margin-left: 40px;
}

.label-monthly-payment {
    font-size: 2.6em;
    font-weight: 700;
    margin: 20px 0 0;
}

.label-payoff-date {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
}

.table-title {
    margin-top: 40px;
    font-size: 1.2em;
}

@media only screen and (max-width:767px) {
    .calculator {
        > div {
            width: 100%;
        }
    }
    .responsive {
        display: none;
    }
}

@media only screen and (max-width: 414px) {
    .calculator {
        border: 0;
    }
    .input-interest {
        width: 90px;
    }
    .input-date {
        width: calc(100% - 130px);
    }
    .table-title {
        text-align: center;
    }
}

</style>