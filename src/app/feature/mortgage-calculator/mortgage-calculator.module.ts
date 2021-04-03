import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';
import { MortgageCalculatorRoutingModule } from './mortgage-calculator-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MortgageSummaryModule } from '../mortgage-summary/mortgage-summary.module';



@NgModule({
  declarations: [MortgageCalculatorComponent],
  imports: [
    CommonModule,
    MortgageCalculatorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MortgageSummaryModule
  ]
})
export class MortgageCalculatorModule { }
