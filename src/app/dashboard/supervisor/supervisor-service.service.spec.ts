import { TestBed, inject } from '@angular/core/testing';

import { SupervisorServiceService } from './supervisor-service.service';

describe('SupervisorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupervisorServiceService]
    });
  });

  it('should be created', inject([SupervisorServiceService], (service: SupervisorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
