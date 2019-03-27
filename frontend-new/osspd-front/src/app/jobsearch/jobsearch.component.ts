import { Component, OnInit } from '@angular/core';

import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
        .subscribe(jobs => this.jobs = jobs);
  }
}
