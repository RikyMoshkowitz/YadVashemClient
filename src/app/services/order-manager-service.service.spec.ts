import { TestBed } from '@angular/core/testing';

import { OrderManagerServiceService } from './order-manager-service.service';

describe('OrderManagerServiceService', () => {
  let service: OrderManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
