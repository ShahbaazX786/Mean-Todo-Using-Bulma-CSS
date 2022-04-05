import { TestBed } from '@angular/core/testing';

import { WebreqService } from './webreq.service';

describe('WebreqService', () => {
  let service: WebreqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebreqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
