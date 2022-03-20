import { TestBed } from '@angular/core/testing';

import { FireStoreStorageService } from './fire-store-storage.service';

describe('FireStoreStorageService', () => {
  let service: FireStoreStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireStoreStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
