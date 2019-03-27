import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs = JOBS;

  constructor() { }

  ngOnInit() {
  }

}
