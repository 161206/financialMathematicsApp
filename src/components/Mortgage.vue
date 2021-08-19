<template>
    <div class="calculator-container">
        <v-container class="mx-5">
            <v-row warp>
                <v-col cols="6">
                    <v-card  class="ma-3" color="blue-grey lighten-5">
                        <v-layout row justify-center class="mx-3">
                            <h2>Mortgage Calculater</h2>
                        </v-layout>
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text ">Original principal</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="Amount" v-model="sharedState.principal"
                                prefix="E" type="number" min='0'>
                                </v-text-field>
                             </v-col>
                        </v-layout>
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text ">Loan duration</h3>
                            </v-col>
                            <v-col cols="2">
                                <v-text-field :label="`${sharedState.select.state}`" v-model="sharedState.compoundFrequency"
                                type="number" min='0'>
                                </v-text-field>
                             </v-col>
                             <v-col cols="3">
                                <v-select v-model="sharedState.select" :items="sharedState.items" item-text="state"
                                item-value="month" label="Select" return-object single-line ></v-select>

                             </v-col>
                        </v-layout>
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text ">interest rate</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="interest" v-model="sharedState.rate"
                                suffix="%" type="number" min='0'>
                                </v-text-field>
                             </v-col>
                        </v-layout>
                        <v-layout row class="mx-3">
                            <v-col cols="7">
                                <h3  class="indigo--text ">Start date</h3>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field label="date" v-model="startDate"
                                  >
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
                            <h2>Result:</h2>
                            <p>Estimate monthly payment</p>
                            <p class="label-monthly-payment">{{ monthlyPayment }}</p>
                            <br>
                            <p>Total Principal Paid <span class="font--bold">{{ numFormat(principalTotal) }}</span></p>
                            <p>Total Interest Paid <span class="font--bold">{{ numFormat(interestTotal) }}</span></p>
                            <br>
                            <p>Estimated Payoff Date</p>
                            <p class="label-payoff-date">{{ payoffDate }}</p>
                        </div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>

       
        <p v-show="amortizationList.length > 0" class="table-title font--bold">Amortization Schedule</p>
        <Table v-show="amortizationList.length > 0">
            <template slot="header">
                <th v-for="(item, index) in headers" :key="index" :class="item.resposive ? 'responsive' : ''">{{ item.label }}</th>
            </template>
            <template slot="body">
                <tr v-for="(item, index) in amortizationList" :key="index">
                    <td v-for="(label, subIndex) in item" :key="subIndex" :class="subIndex == 'monthlyPayment' || subIndex == 'principal' ? 'responsive' : ''">{{ label }}</td>
                </tr>
            </template>
        </Table>
    </div>
</template>
<script>
import {store} from '@/views/store.js'
import Table from '@/components/Table.vue'
import { numFormat, dateFormat } from '@/utils/Utils'
export default {
    components: {
        Table
    },
    mounted() {
        this.calculate();
    },
    data(){
        return {
            sharedState: store.state,
            due: null,
            menu: false,
            carPrice: 25000,
            downPayment: 5000,
            monthlyPayment: 0,
            interestRate: 3,
            interestTotal: 0,
            duration: 60,
            isYearly: false,
            startDate: this.dateFormat(new Date()),
            payoffDate: this.dateFormat(new Date(), true),
            headers: [
                    { label: "Payment Date" }, 
                    { label: "Payment", resposive: true },
                    { label: "Principal", resposive: true }, 
                    { label: "Interest" }, 
                    { label: "Total Interest" }, 
                    { label: "Balance" }
                    ],
            amortizationList: []
        }
    },
    
    methods: {
        invalidCarPrice() {
            if(Number(this.carPrice) < 100 || Number(this.carPrice) < Number(this.downPayment)) return "Price to low";
            return false;
        },
        invalidDownpayment() {
            if(Number(this.carPrice) < Number(this.downPayment)) return "Invalid downpayment";
            return false;
        },
        invalidInterestRate() {
            if(Number(this.interestRate) <= 0 || Number(this.interestRate) > 98) return "Invalid rate";
            return false;
        },
        invalidStartDate() {
            let date =  new Date(this.startDate)
            let invalid = date == 'Invalid Date';
            if(invalid || date.getFullYear().toString().length != 4) return "Invalid date"
            this.startDate = this.dateFormat(date);
            return false;
        },
        reset() {
            this.sharedState.principal = null;
            this.sharedState.rate = null;
            this.sharedState.compoundFrequency = null;
            this.startDate = new Date();
        },
        
        calculate() {
            //don't process if has error input
            if(this.$el.querySelector('.custom-input--error')) return;
            
            let count = this.sharedState.compoundFrequency * this.sharedState.select.month;
            let i =(this.sharedState.rate/100)/12;
            let result = (this.sharedState.principal*i*Math.pow(1+i,this.sharedState.compoundFrequency))/(Math.pow(1+i,this.sharedState.compoundFrequency)-1);

            this.monthlyPayment = this.numFormat(Math.round(result)); 
            this.amortizationList = [];
            
            let principal, interest, date = new Date(this.startDate),
                totalInterest = 0, balance = this.sharedState.principal;

            while(count >= 0) {
                //set next month
                date.setMonth(date.getMonth() + 1);
                interest = balance * i;
                totalInterest += interest;
                principal = result - interest;
                if(interest < 0) interest = 0; 
                if(balance < 0){ balance = 0; break;}
                this.amortizationList.push({
                    date: this.dateFormat(date),
                    monthlyPayment: this.monthlyPayment,
                    principal: this.numFormat(Math.round(principal)), 
                    interest: this.numFormat(Math.round(interest)), 
                    totalInterest: this.numFormat(Math.round(totalInterest)), 
                    balance: this.numFormat(Math.round(balance))
                });
                balance -= principal;
                count--;
            }
            this.interestTotal = totalInterest;
            this.payoffDate = this.dateFormat(date, true);
        },
        numFormat,
        dateFormat
    }
}
</script>
<style lang="scss" scoped>

</style>