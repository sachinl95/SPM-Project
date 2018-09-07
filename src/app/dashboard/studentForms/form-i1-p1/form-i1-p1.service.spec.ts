import { TestBed, inject } from '@angular/core/testing';

import { FormI1P1Service } from './form-i1-p1.service';

describe('FormI1P1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormI1P1Service]
    });
  });

  it('should be created', inject([FormI1P1Service], (service: FormI1P1Service) => {
    expect(service).toBeTruthy();
  }));
});
