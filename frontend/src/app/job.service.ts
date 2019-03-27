import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Job } from './job';
import { JOBS } from './mock-jobs';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  constructor() { }

  getJobs(): Observable<Job[]> {
    return of(JOBS);
  }

}
