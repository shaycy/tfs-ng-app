import { TestBed, inject } from '@angular/core/testing';

import { TfsApiService } from './tfs-api.service';

describe('TfsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TfsApiService]
    });
  });

  it('should be created', inject([TfsApiService], (service: TfsApiService) => {
    expect(service).toBeTruthy();
  }));
});
