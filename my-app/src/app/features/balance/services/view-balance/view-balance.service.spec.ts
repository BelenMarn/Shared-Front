import { TestBed } from '@angular/core/testing';

import { ViewBalanceService } from './view-balance.service';

describe('ViewBalanceService', () => {
  let service: ViewBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
