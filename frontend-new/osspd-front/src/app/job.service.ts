import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Job } from './job';
import { JOBS } from './mock-jobs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  constructor(private messageService: MessageService) { }

  getJobs(): Observable<Job[]> {
    this.messageService.add('JobService: fetched jobs');
    return of(JOBS);
  }
}
