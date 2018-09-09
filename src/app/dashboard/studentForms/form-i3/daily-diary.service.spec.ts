import { TestBed, inject } from '@angular/core/testing';

import { DailyDiaryService } from './daily-diary/daily-diary.service';

describe('DailyDiaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyDiaryService]
    });
  });

  it('should be created', inject([DailyDiaryService], (service: DailyDiaryService) => {
    expect(service).toBeTruthy();
  }));
});
