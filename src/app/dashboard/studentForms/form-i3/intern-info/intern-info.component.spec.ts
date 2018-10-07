import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternInfoComponent } from './intern-info.component';

describe('InternInfoComponent', () => {
  let component: InternInfoComponent;
  let fixture: ComponentFixture<InternInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
