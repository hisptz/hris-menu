import { TestBed } from '@angular/core/testing';

import { HrisMenuService } from './hris-menu.service';

describe('HrisMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrisMenuService = TestBed.get(HrisMenuService);
    expect(service).toBeTruthy();
  });
});
