import { TestBed } from '@angular/core/testing';

import { BillMockService } from './bill-mock.service';

describe('BillMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillMockService = TestBed.get(BillMockService);
    expect(service).toBeTruthy();
  });
});
