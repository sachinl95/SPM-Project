import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMonthlyReportComponent } from './send-monthly-report.component';

describe('SendMonthlyReportComponent', () => {
  let component: SendMonthlyReportComponent;
  let fixture: ComponentFixture<SendMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
