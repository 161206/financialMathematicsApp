import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CompoundInterest from '../views/CompoundInterest.vue'
import LoanPaymentCalcutator from '../views/LoanPaymentCalcutator.vue'
import LoanRemainingBalanceCalculator from '../views/LoanRemainingBalanceCalculator.vue'
import LoanBallonBalanceCalculator from '../views/LoanBallonBalanceCalculator.vue'
import AnnuityFuturevalue from '../views/AnnuityFuturevalue.vue'
import AnnuityFutureValueWithContinuousCompounding from '../views/AnnuityFutureValueWithContinuousCompounding.vue'
import AnnuityFutureValueSolveForN from '../views/AnnuityFutureValueSolveForN.vue'
import AnnuityPaymentPV from '../views/AnnuityPaymentPV.vue'
import AnnuityPaymentFV from '../views/AnnuityPaymentFV.vue'
import AnnuityPaymentFactorPV from '../views/AnnuityPaymentFactorPV.vue'
import AnnuityPresentValue from '../views/AnnuityPresentValue.vue'
import AnnuityPresentValueWithContinuousCompounding from '../views/AnnuityPresentValueWithContinuousCompounding.vue'
import AnnuityPresentValueSolveForN from '../views/AnnuityPresentValueSolveForN.vue'
import AnnuityDuePresentValue from '../views/AnnuityDuePresentValue.vue'
import AnnuityDueFutureValue from '../views/AnnuityDueFutureValue.vue'
import AnnuityDuePaymentPV from '../views/AnnuityDuePaymentPV.vue'
import AnnuityDuePaymentFV from '../views/AnnuityDuePaymentFV.vue'
import Mortgage from '../views/Mortgage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  
  {
    path: '/CompoundInterest',
    name: 'CompoundInterest',
    component: CompoundInterest
  },
  {
    path: '/LoanPaymentCalcutator',
    name: 'LoanPaymentCalcutator',
    component: LoanPaymentCalcutator
  },
  {
    path: '/LoanRemainingBalanceCalculator',
    name: 'LoanRemainingBalanceCalculator',
    component: LoanRemainingBalanceCalculator
  },
  {
    path: '/LoanBallonBalanceCalculator',
    name: 'LoanBallonBalanceCalculator',
    component: LoanBallonBalanceCalculator
  },
  {
    path: '/AnnuityFuturevalue',
    name: 'AnnuityFuturevalue',
    component: AnnuityFuturevalue
  },
  {
    path: '/AnnuityFutureValueWithContinuousCompounding',
    name: 'AnnuityFutureValueWithContinuousCompounding',
    component: AnnuityFutureValueWithContinuousCompounding
  },
  {
    path: '/AnnuityFutureValueSolveForN',
    name: 'AnnuityFutureValueSolveForN',
    component: AnnuityFutureValueSolveForN
  },
  {
    path: '/AnnuityPaymentPV',
    name: 'AnnuityPaymentPV',
    component: AnnuityPaymentPV
  },
  {
    path: '/AnnuityPaymentFV',
    name: 'AnnuityPaymentFV',
    component: AnnuityPaymentFV
  },
  {
    path: '/AnnuityPaymentFactorPV',
    name: 'AnnuityPaymentFactorPV',
    component: AnnuityPaymentFactorPV
  },
  {
    path: '/AnnuityPresentValue',
    name: 'AnnuityPresentValue',
    component: AnnuityPresentValue
  },
  {
    path: '/AnnuityPresentValueWithContinuousCompounding',
    name: 'AnnuityPresentValueWithContinuousCompounding',
    component: AnnuityPresentValueWithContinuousCompounding
  },
  {
    path: '/AnnuityPresentValueSolveForN',
    name: 'AnnuityPresentValueSolveForN',
    component: AnnuityPresentValueSolveForN
  },
  {
    path: '/AnnuityDuePresentValue',
    name: 'AnnuityDuePresentValue',
    component: AnnuityDuePresentValue
  },
  {
    path: '/AnnuityDueFutureValue',
    name: 'AnnuityDueFutureValue',
    component: AnnuityDueFutureValue
  },
  {
    path: '/AnnuityDuePaymentPV',
    name: 'AnnuityDuePaymentPV',
    component: AnnuityDuePaymentPV
  },
  {
    path: '/AnnuityDuePaymentFV',
    name: 'AnnuityDuePaymentFV',
    component: AnnuityDuePaymentFV
  },
  {
    path: '/Mortgage',
    name: 'Mortgage',
    component: Mortgage
  }/* ,
  {
    path: '/CompoundInterest',
    name: 'CompoundInterest',
    component: CompoundInterest
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
