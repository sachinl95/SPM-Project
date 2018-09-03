import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI1Component } from './form-i1.component';

describe('FormI1Component', () => {
  let component: FormI1Component;
  let fixture: ComponentFixture<FormI1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
