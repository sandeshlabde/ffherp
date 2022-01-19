import { TestBed } from '@angular/core/testing';

import { listDataService } from './list-data.service';

describe('ListDataService', () => {
  let service: listDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(listDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
