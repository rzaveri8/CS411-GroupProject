import { Injectable } from '@angular/core';

import { Job } from './job';
import { JOBS } from './mock-jobs';

@Injectable({
  providedIn: 'root',
})
export class JobService {


  getJobs(): Job[] {
    return JOBS;
  }

  constructor() { }

}
