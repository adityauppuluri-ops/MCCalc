import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export function formCreatorPaymentPlan(fb: FormBuilder) {
    const mortgagePaymentPlanForm = fb.group({
        mortgageAmount: ['100000', [Validators.required, Validators.min(1), Validators.pattern('[0-9]+(\.[0-9]{1,2})?')]],
        interestRate: ['5.00', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern('[0-9]+(\.[0-9]{1,2})?')]],
        amortizationPeriodYears: ['25', [Validators.required]],
        amortizationPeriodMonths: ['', [Validators.required]],
        paymentFrequency: ['12'],
        term: ['5'],
    
      })
      return mortgagePaymentPlanForm;
}

export function formCreatorPrepaymentPlan(fb: FormBuilder) {

    const mortgagePrepaymentPlanForm = fb.group({

        prepaymentAmount: ['0.00', [Validators.pattern('[0-9]+(\.[0-9]{1,2})?')]],
        prepaymentFrequency: [''],
        startWithPayment: ['1', [Validators.required, Validators.min(1), Validators.max(9999), Validators.pattern('[0-9]+')]]
      })
      return mortgagePrepaymentPlanForm;
}