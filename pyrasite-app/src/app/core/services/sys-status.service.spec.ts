import { TestBed } from '@angular/core/testing';

import { SysStatusService } from './sys-status.service';

describe('SysStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysStatusService = TestBed.get(SysStatusService);
    expect(service).toBeTruthy();
  });
});
