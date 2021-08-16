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
        <v-list-item
          v-for="item in links"
          :key="item.text"
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
                    
                    { icon: 'dashboard', text: 'Loan Calculator', route: '/components/LoanCalculator' },
                    { icon: 'dashboard', text: 'Auto Loan Calculator', route: '/' },
                    { icon: 'dashboard', text: 'Mortgage', route: '/components/Mortgage' },
                    { icon: 'dashboard', text: 'Annuty Calculator', route: '/components/AnnuityCalculator' },
                    { icon: 'dashboard', text: 'Installment', route: '/components/Installment' },
                    ],
            /*
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
                    
                    ],
                text: 'Annuity',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Compound Interest Calculator', route: '/CompoundInterest' },
                    ],
                text: 'Compound Interest',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Installment Calculator', route: '/Installment' },
                    ],
                text: 'Installment',
              },
              {
                icon: 'folder',
                links: [
                    
                    { icon: 'dashboard', text: 'Loan Calculator', route: '/LoanCalculator' },
                    { icon: 'dashboard', text: 'Auto Loan Calculator', route: '/components/AutoLoanCalculator' },
                    { icon: 'dashboard', text: 'Mortgage', route: '/components/Mortgage' },
                    { icon: 'dashboard', text: 'Annuty Calculator', route: '/components/AnnuityCalculator' },
                    { icon: 'dashboard', text: 'Installment', route: '/components/Installment' },
                    ],
                text: 'Mortgage',
              },
              {
                icon: 'folder',
                links: [
                    { icon: 'dashboard', text: 'Loan Payment Calcutator', route: '/LoanPaymentCalcutator' },
                    { icon: 'dashboard', text: 'loan remaining balance calculator', route: '/LoanRemainingBalanceCalculator' },
                    { icon: 'dashboard', text: 'Loan Ballon Balance Calculator', route: '/LoanBallonBalanceCalculator' },
                    
                    ],
                text: 'Loan',
              },
            ],*/
                    
        }
    }
    
}
</script>