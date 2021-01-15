<template>
    <nav >
        <v-toolbar flat app>
            <v-icon class="grey--text" @click="drawer = !drawer">menu</v-icon>
            <v-toolbar-title>
                <span>Financial Mathematics</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>

            </v-btn>

        </v-toolbar>
        <v-navigation-drawer app mx-auto v-model="drawer" class="indigo darken-4">
           <v-list>
      <v-list-group
        v-for="link in links"
        :key="link.text"
        v-model="link.active"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
        </template>

        <v-list-item v-for="sublink in link.links" :key="sublink.text" router :to="sublink.route">
            <v-list-item-action>
                <v-icon class="white--text">{{ sublink.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title class="white--text">{{sublink.text}}</v-list-item-title>
            </v-list-item-content>
                </v-list-item>
      </v-list-group>
    </v-list>

        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Future Value of Annuity Calculator', route: '/AnnuityFuturevalue' },
                    { icon: 'dashboard', text: 'FuterValue of Annuity - Continuous Compounding Calculator', route: '/AnnuityFutureValueWithContinuousCompounding' },
                    { icon: 'dashboard', text: 'Annuity FutureValue Solve For N Calculator', route: '/AnnuityFutureValueSolveForN' },
                    { icon: 'dashboard', text: 'Annuity Payment Calculator (PV)', route: '/AnnuityPaymentPV' },
                    { icon: 'dashboard', text: 'Annuity Payment Calculator (FV)', route: '/AnnuityPaymentFV' },
                    { icon: 'dashboard', text: 'Annuity Payment Factor Calculator (PV)', route: '/AnnuityPaymentFactorPV' },
                    { icon: 'dashboard', text: 'PV of Annuity Calculator', route: '/AnnuityPresentValue' },
                    { icon: 'dashboard', text: 'Annuity Present Value With Continuous Compounding', route: '/AnnuityPresentValueWithContinuousCompounding' },
                    { icon: 'dashboard', text: 'Annuity Present Value Solve For N Calculator', route: '/AnnuityPresentValueSolveForN' },
                    { icon: 'dashboard', text: 'Annuity Due Present Value Calculator', route: '/AnnuityDuePresentValue' },
                    { icon: 'dashboard', text: 'Annuity Due Future Value Calculator', route: '/AnnuityDueFutureValue' },
                    { icon: 'dashboard', text: 'Annuity Due Payment Calculator (PV)', route: '/AnnuityDuePaymentPV' },
                    { icon: 'dashboard', text: 'Annuity Due Payment Calculator (FV)', route: '/AnnuityDuePaymentFV' },
                    /*
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },*/
                    ],
                text: 'Annuity',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },/*
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },*/
                    ],
                text: 'Compound Interest',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Installment Calculator', route: '/Installment' },/*
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },*/
                    ],
                text: 'Installment',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Mortgage Calculator', route: '/Mortgage' },/*
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },*/
                    ],
                text: 'Mortgage',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Loan Payment Calcutator', route: '/LoanPaymentCalcutator' },
                    { icon: 'dashboard', text: 'loan remaining balance calculator', route: '/LoanRemainingBalanceCalculator' },
                    { icon: 'dashboard', text: 'Loan Ballon Balance Calculator', route: '/LoanBallonBalanceCalculator' },
                    /*
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },*/
                    ],
                text: 'Loan',
              },
            ],
                    
        }
    }
    
}
</script>