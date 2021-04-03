import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { MortgageCalculatorService } from 'src/app/shared/service/mortgage-calculator.service';
import { MortgageSummaryModule } from '../mortgage-summary/mortgage-summary.module';
import { MortgageCalculatorRoutingModule } from './mortgage-calculator-routing.module';
import { MortgageCalculatorComponent } from './mortgage-calculator.component';

describe('MortgageCalculatorComponent', () => {
  let component: MortgageCalculatorComponent;
  let fixture: ComponentFixture<MortgageCalculatorComponent>;
  beforeEach(() => {
    const mortgageCalculatorServiceStub = () => ({
      getDataFromBackend: () => ({
        subscribe: sample => sample({
          "amortPeriodYearList": [
            { "label": "1 Year", "year": 1 },
            { "label": "2 Years", "year": 2 },
            { "label": "3 Years", "year": 3 },
            { "label": "4 Years", "year": 4 },
            { "label": "5 Years", "year": 5 },
            { "label": "6 Years", "year": 6 },
            { "label": "7 Years", "year": 7 },
            { "label": "8 Years", "year": 8 },
            { "label": "9 Years", "year": 9 },
            { "label": "10 Years", "year": 10 },
            { "label": "11 Years", "year": 11 },
            { "label": "12 Years", "year": 12 },
            { "label": "13 Years", "year": 13 },
            { "label": "14 Years", "year": 14 },
            { "label": "15 Years", "year": 15 },
            { "label": "16 Years", "year": 16 },
            { "label": "17 Years", "year": 17 },
            { "label": "18 Years", "year": 18 },
            { "label": "19 Years", "year": 19 },
            { "label": "20 Years", "year": 20 },
            { "label": "21 Years", "year": 21 },
            { "label": "22 Years", "year": 22 },
            { "label": "23 Years", "year": 23 },
            { "label": "24 Years", "year": 24 },
            { "label": "25 Years", "year": 25 },
            { "label": "26 Years", "year": 26 },
            { "label": "27 Years", "year": 27 },
            { "label": "28 Years", "year": 28 },
            { "label": "29 Years", "year": 29 },
            { "label": "30 Years", "year": 30 }
          ],
          "amortPeriodMonthList": [{ "label": "", "month": 0 }, { "label": "1 Month", "month": 1 },
          { "label": "2 Months", "month": 2 },
          { "label": "3 Months", "month": 3 },
          { "label": "4 Months", "month": 4 },
          { "label": "5 Months", "month": 5 },
          { "label": "6 Months", "month": 6 },
          { "label": "7 Months", "month": 7 },
          { "label": "8 Months", "month": 8 },
          { "label": "9 Months", "month": 9 },
          { "label": "10 Months", "month": 10 },
          { "label": "11 Months", "month": 11 }
          ],
          "paymentFrequencyList": [
            { "label": "Bi-Weekly (every 2 weeks)", "value": 26 },
            { "label": "Semi-monthly (24x per year)", "value": 24 },
            { "label": "Monthly (12x per year)", "value": 12 }
          ],
          "termList": [{ "label": "1 Year", "year": 1 },
          { "label": "2 Years", "year": 2 },
          { "label": "3 Years", "year": 3 },
          { "label": "4 Years", "year": 4 },
          { "label": "5 Years", "year": 5 },
          { "label": "6 Years", "year": 6 },
          { "label": "7 Years", "year": 7 },
          { "label": "8 Years", "year": 8 },
          { "label": "9 Years", "year": 9 },
          { "label": "10 Years", "year": 10 }
          ],

          "prepaymentFrequencyList": [
            { "label": "One time", "value": 1 },
            { "label": "Each year", "value": 2 },
            { "label": "Same as regular payment", "value": 3 }
          ]

        })
      }),

    });

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MortgageCalculatorRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MortgageSummaryModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MortgageCalculatorComponent],
      providers: [
        {
          provide: MortgageCalculatorService,
          useFactory: mortgageCalculatorServiceStub
        },
        FormBuilder
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculatorComponent);

    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  it('paymentFrequencyList has dropdown values', () => {
    expect(component.paymentFrequencyList).toEqual([
      { "label": "Bi-Weekly (every 2 weeks)", "value": 26 },
      { "label": "Semi-monthly (24x per year)", "value": 24 },
      { "label": "Monthly (12x per year)", "value": 12 }
    ]);
  });

  describe('Default values', () => {
    it('mortgage Amount default to 100000', () => {
      expect(component.mortgagePaymentPlanForm.controls.mortgageAmount.value).toEqual("100000");
    });

    it('amortization Period Years default to 25', () => {
      expect(component.mortgagePaymentPlanForm.controls.amortizationPeriodYears.value).toEqual("25");
    });

    it('interest rate default to 5.00', () => {
      expect(component.mortgagePaymentPlanForm.controls.interestRate.value).toEqual("5.00");
    });
  });



});
