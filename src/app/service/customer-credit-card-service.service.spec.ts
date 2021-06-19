import { TestBed } from '@angular/core/testing';

import { CustomerCreditCardServiceService } from './customer-credit-card-service.service';

describe('CustomerCreditCardServiceService', () => {
  let service: CustomerCreditCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCreditCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
