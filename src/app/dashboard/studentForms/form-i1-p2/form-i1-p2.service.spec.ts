import { TestBed, inject } from '@angular/core/testing';

import { FormI1P2Service } from './form-i1-p2.service';

describe('FormI1P2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormI1P2Service]
    });
  });

  it('should be created', inject([FormI1P2Service], (service: FormI1P2Service) => {
    expect(service).toBeTruthy();
  }));
});
