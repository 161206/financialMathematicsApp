
export const store = {
    state: { /*
        newP = new principal sum
        P = original principal sum
        r = nominal annual interest rate
        n = compound frequency
        t = overall length of time the interest is applied*/
        
        newPrincipal:0,
        principal   :5000,
        payment: 0,
        futurevalue :0,
        rate   :2.5,
        compoundFrequency   :2,
        time   :5,
        startDate: new Date(),
        select: { state: 'month', month: 1  },
        items: [
          { state: 'month', month: 1 },
          { state: 'year', month: 12 },
        ],        
    }

}