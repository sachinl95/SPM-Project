import { TestBed, inject } from '@angular/core/testing';

import { AssignService } from './assign.service';

describe('AssignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignService]
    });
  });

  it('should be created', inject([AssignService], (service: AssignService) => {
    expect(service).toBeTruthy();
  }));
});
