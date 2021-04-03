import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MortgageCalculatorModule } from './feature/mortgage-calculator/mortgage-calculator.module';
import { MortgageSummaryModule } from './feature/mortgage-summary/mortgage-summary.module';
import { PaymentDiagramModule } from './feature/payment-diagram/payment-diagram.module';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MortgageCalculatorModule,
    MortgageSummaryModule,
    PaymentDiagramModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
