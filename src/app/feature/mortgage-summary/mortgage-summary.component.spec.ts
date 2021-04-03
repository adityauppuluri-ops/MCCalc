import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageSummaryComponent } from './mortgage-summary.component';

describe('MortgageSummaryComponent', () => {
  let component: MortgageSummaryComponent;
  let fixture: ComponentFixture<MortgageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
