import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDiaryComponent } from './daily-diary.component';

describe('DailyDiaryComponent', () => {
  let component: DailyDiaryComponent;
  let fixture: ComponentFixture<DailyDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
