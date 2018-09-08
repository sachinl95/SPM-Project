import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternInformationComponent } from './intern-information.component';

describe('InternInformationComponent', () => {
  let component: InternInformationComponent;
  let fixture: ComponentFixture<InternInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
