import { Component, Input, OnInit, Output } from '@angular/core';
import { MortgageSummary } from 'src/app/shared/models/MortgageSummary';
import { MortgageSummaryInpModel } from 'src/app/shared/models/MortgageSummaryInpModel';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.css']
})
export class MortgageSummaryComponent implements OnInit {

  constructor() { }
  @Input() inputForMortgageSummary: MortgageSummaryInpModel;
  @Output() outputFromMortgageSummary: string;
  termMortgageSummary: MortgageSummary;
  amortMortgageSummary: MortgageSummary;
  monthlyRateOfInterest: number;
  rateOfInterest: number;
  rateOfInterestTotalPayments: number;
  amortizationNumPymtsPerYear: number;
  totalCostForTerm: number;
  totalCostForAmor: number;


  ngOnInit(): void {
    this.calculate();
  }
  ngOnChanges() {
    this.calculate();
  }
  calculate() {
    if (this.inputForMortgageSummary) {
      this.termMortgageSummary = new MortgageSummary();
      this.amortMortgageSummary = new MortgageSummary();
      /* number of payments */
      this.termMortgageSummary.numberOfPayments = (this.inputForMortgageSummary?.paymentPlan.term * this.inputForMortgageSummary?.paymentPlan.paymentFrequency);
      this.amortMortgageSummary.numberOfPayments = (this.inputForMortgageSummary?.paymentPlan.amortizationPeriodYears * this.inputForMortgageSummary?.paymentPlan.paymentFrequency);
      this.amortizationNumPymtsPerYear = (this.inputForMortgageSummary?.paymentPlan.amortizationPeriodYears * 12);

      /* Mortgage Payment = P * (12/payment frequency) * r(1 + r)^n / ((1 + r)^n -1) */
      this.monthlyRateOfInterest = (this.inputForMortgageSummary?.paymentPlan.interestRate / (12 * 100));
      this.rateOfInterestTotalPayments = Math.pow((1 + this.monthlyRateOfInterest), this.amortizationNumPymtsPerYear);
      this.termMortgageSummary.mortgagePayment =
        this.inputForMortgageSummary.paymentPlan.mortgageAmount * (12 / this.inputForMortgageSummary?.paymentPlan.paymentFrequency) * ((this.monthlyRateOfInterest * this.rateOfInterestTotalPayments) / (this.rateOfInterestTotalPayments - 1));
      this.amortMortgageSummary.mortgagePayment = this.termMortgageSummary.mortgagePayment;

      /* pre payments */
      this.termMortgageSummary.prePayment = 0.00;
      this.amortMortgageSummary.prePayment = 0.00;

      /* interest payment = total cost * (1/((1 + (r/n))^nt)*/
      this.totalCostForTerm = this.termMortgageSummary.mortgagePayment * this.inputForMortgageSummary?.paymentPlan.paymentFrequency * this.inputForMortgageSummary?.paymentPlan.term;
      this.totalCostForAmor = this.termMortgageSummary.mortgagePayment * this.inputForMortgageSummary?.paymentPlan.paymentFrequency * this.inputForMortgageSummary?.paymentPlan.amortizationPeriodYears;
      this.rateOfInterest = (this.inputForMortgageSummary?.paymentPlan.interestRate / 100);
      this.termMortgageSummary.interestPayment = this.totalCostForTerm /(Math.pow((1 + (this.rateOfInterest/this.inputForMortgageSummary?.paymentPlan.paymentFrequency)),(this.inputForMortgageSummary?.paymentPlan.paymentFrequency * this.inputForMortgageSummary?.paymentPlan.term)));
      this.amortMortgageSummary.principalPayment = this.inputForMortgageSummary.paymentPlan.mortgageAmount;

      /*principal payment  = total cost - principal payment */
      this.termMortgageSummary.principalPayment = this.totalCostForTerm - this.termMortgageSummary.interestPayment;
      this.amortMortgageSummary.interestPayment = this.totalCostForAmor - this.amortMortgageSummary.principalPayment;

      /* total cost */
      this.amortMortgageSummary.totalCost = this.totalCostForAmor;
      this.termMortgageSummary.totalCost = this.totalCostForTerm;
    }

  }

}
