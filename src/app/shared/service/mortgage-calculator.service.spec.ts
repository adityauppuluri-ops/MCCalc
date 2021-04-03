import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MortgageCalculatorService } from './mortgage-calculator.service';


describe('MortgageCalculatorService', () => {
  let service: MortgageCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]

    });
    service = TestBed.inject(MortgageCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
