import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';

import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService) { }

  getJobs(): void {
    this.jobs = this.jobService.getJobs();
  }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

}
