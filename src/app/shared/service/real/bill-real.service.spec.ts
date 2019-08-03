import { TestBed } from '@angular/core/testing';

import { BillRealService } from './bill-real.service';

describe('BillRealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillRealService = TestBed.get(BillRealService);
    expect(service).toBeTruthy();
  });
});
