import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageSummaryComponent } from './mortgage-summary.component';



@NgModule({
  declarations: [MortgageSummaryComponent],
  imports: [
    CommonModule
  ],
  exports: [MortgageSummaryComponent]
})
export class MortgageSummaryModule { }
