import { TestBed } from '@angular/core/testing';

import { HatService } from './hat.service';

describe('HatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HatService = TestBed.get(HatService);
    expect(service).toBeTruthy();
  });
});
