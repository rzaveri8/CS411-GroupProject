import { Component, OnInit } from '@angular/core';
import { Job } from '../job';

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
    this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  ngOnInit() {
    this.getJobs();
  }

}
