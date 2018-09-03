import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormI6Component } from './form-i6.component';

describe('FormI6Component', () => {
  let component: FormI6Component;
  let fixture: ComponentFixture<FormI6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormI6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormI6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
