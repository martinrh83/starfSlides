import { TestBed, inject } from '@angular/core/testing';

import { StarfService } from './starf.service';

describe('StarfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarfService]
    });
  });

  it('should be created', inject([StarfService], (service: StarfService) => {
    expect(service).toBeTruthy();
  }));
});
