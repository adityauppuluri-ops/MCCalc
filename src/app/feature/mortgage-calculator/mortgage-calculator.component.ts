import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataModelBackend } from 'src/app/shared/models/DataModelBackend';
import { Month } from 'src/app/shared/models/Month';
import { MortgageSummaryInpModel } from 'src/app/shared/models/MortgageSummaryInpModel';
import { PaymentFrequency } from 'src/app/shared/models/PaymentFrequncy';
import { PaymentPlan } from 'src/app/shared/models/PaymentPlan';
import { PrepaymentFrequency } from 'src/app/shared/models/PrepaymentFrequency';
import { PrepaymentPlan } from 'src/app/shared/models/PrepaymentPlan';
import { Term } from 'src/app/shared/models/Term';
import { Year } from 'src/app/shared/models/Year';
import { MortgageCalculatorService } from 'src/app/shared/service/mortgage-calculator.service';
import { formCreatorPaymentPlan, formCreatorPrepaymentPlan } from 'src/app/shared/utility/form-objects';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent implements OnInit {

  constructor(@Inject(MortgageCalculatorService) private mortgageCalculatorService: MortgageCalculatorService, private fb: FormBuilder) { }
  amortPeriodYearList: Year[] = [];
  amortPeriodMonthList: Month[] = [];
  paymentFrequencyList: PaymentFrequency[] = [];
  termList: Term[] = [];
  prepaymentFrequencyList: PrepaymentFrequency[] = [];
  dataFromBackend: DataModelBackend;
  mortgageCalcSubscription: Subscription;
  inputForMortgageSummary: MortgageSummaryInpModel;
  paymentPlan: PaymentPlan = new PaymentPlan();
  prepaymentPlan: PrepaymentPlan = new PrepaymentPlan();


  mortgagePaymentPlanForm = formCreatorPaymentPlan(this.fb);
  mortgagePrepaymentPlanForm = formCreatorPrepaymentPlan(this.fb);

  ngOnInit(): void {

    this.mortgageCalcSubscription = this.mortgageCalculatorService
      .getDataFromBackend()
      .subscribe(data => {
        this.dataFromBackend = data as DataModelBackend;
        this.amortPeriodYearList = this.dataFromBackend.amortPeriodYearList;
        this.amortPeriodMonthList = this.dataFromBackend.amortPeriodMonthList;
        this.paymentFrequencyList = this.dataFromBackend.paymentFrequencyList;
        this.termList = this.dataFromBackend.termList;
        this.prepaymentFrequencyList = this.dataFromBackend.prepaymentFrequencyList;
        this.populateInpForMortgageSummary();
      })
  }

  populateInpForMortgageSummary() {

    this.paymentPlan.mortgageAmount = this.mortgagePaymentPlanForm.controls.mortgageAmount.value;
    this.paymentPlan.amortizationPeriodMonths = this.mortgagePaymentPlanForm.controls.amortizationPeriodMonths.value;
    this.paymentPlan.amortizationPeriodYears = this.mortgagePaymentPlanForm.controls.amortizationPeriodYears.value;
    this.paymentPlan.interestRate = this.mortgagePaymentPlanForm.controls.interestRate.value;
    this.paymentPlan.paymentFrequency = this.mortgagePaymentPlanForm.controls.paymentFrequency.value;
    this.paymentPlan.term = this.mortgagePaymentPlanForm.controls.term.value;

    this.prepaymentPlan.prepaymentAmount = this.mortgagePrepaymentPlanForm.controls.prepaymentAmount.value;
    this.prepaymentPlan.prepaymentFrequency = this.mortgagePrepaymentPlanForm.controls.prepaymentFrequency.value;
    this.prepaymentPlan.startWithPayment = this.mortgagePrepaymentPlanForm.controls.startWithPayment.value;
    this.inputForMortgageSummary = new MortgageSummaryInpModel();
    this.inputForMortgageSummary.paymentPlan = this.paymentPlan;
    this.inputForMortgageSummary.prepaymentPlan = this.prepaymentPlan;
  }

  ngOnDestroy() {
    if (this.mortgageCalcSubscription) {
      this.mortgageCalcSubscription.unsubscribe();
    }
  }

}
