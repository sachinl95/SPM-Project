import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaSchedulesComponent } from './viva-schedules.component';

describe('VivaSchedulesComponent', () => {
  let component: VivaSchedulesComponent;
  let fixture: ComponentFixture<VivaSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VivaSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VivaSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
