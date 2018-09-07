import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI1P2Component } from './form-i1-p2.component';

describe('FormI1P2Component', () => {
  let component: FormI1P2Component;
  let fixture: ComponentFixture<FormI1P2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI1P2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI1P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
