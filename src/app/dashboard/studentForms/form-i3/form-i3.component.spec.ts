import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI3Component } from './form-i3.component';

describe('FormI3Component', () => {
  let component: FormI3Component;
  let fixture: ComponentFixture<FormI3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
