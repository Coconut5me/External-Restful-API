import { TestBed } from '@angular/core/testing';

import { BookAPIService } from './book-api.service';

describe('BookApiService', () => {
  let service: BookAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
