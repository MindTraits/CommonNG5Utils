import { TestBed, inject } from '@angular/core/testing';

import { CountryServiceService } from './country-service.service';

describe('CountryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryServiceService]
    });
  });

  it('should be created', inject([CountryServiceService], (service: CountryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
