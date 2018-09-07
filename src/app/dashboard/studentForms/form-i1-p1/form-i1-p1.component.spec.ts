import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI1P1Component } from './form-i1-p1.component';

describe('FormI1P1Component', () => {
  let component: FormI1P1Component;
  let fixture: ComponentFixture<FormI1P1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI1P1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI1P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
