import { TestBed } from '@angular/core/testing';

import { OnlineDataService } from './online-data.service';

describe('OnlineDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineDataService = TestBed.get(OnlineDataService);
    expect(service).toBeTruthy();
  });
});
