import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Job } from './job';
import { JOBS } from './mock-jobs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private jobsUrl = 'http://52.14.17.113:8080/api/all/amazon/Software+Engineer';  // URL to web api
  constructor(  public http: HttpClient  ) { }

  getJobs(): Observable<Job[]> {
    console.log("Trying to get data");
    return this.http.get<Job[]>(this.jobsUrl);
  }

}
