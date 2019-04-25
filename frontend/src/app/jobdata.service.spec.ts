import { TestBed } from '@angular/core/testing';

import { JobdataService } from './jobdata.service';

describe('JobdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobdataService = TestBed.get(JobdataService);
    expect(service).toBeTruthy();
  });
});
