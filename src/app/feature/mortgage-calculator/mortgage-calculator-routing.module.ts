import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';

const routes: Routes = [{
  path: 'mortgage-calculator', 
  component: MortgageCalculatorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class MortgageCalculatorRoutingModule { }
