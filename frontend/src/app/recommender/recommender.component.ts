import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobdataService } from '../jobdata.service';
import { RouterModule, Routes } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  constructor(private http: HttpClient, private data: JobdataService) { }

  response: any;
  jobs: any;
  industry: string;
  error: string;
  loading: boolean;

  selectedJob: string[];

  jobSearch(job: string[]) {
    this.selectedJob = job;
    this.data.setJobInfo(this.selectedJob);
    $("#myModal").modal();
  }

  ngOnInit() {
    this.loading = true;
    this.error = "";
    this.http.get("/api/jobs").subscribe((res)=> {
      this.response = res;
      this.jobs = this.response.data;
      this.industry = this.response.industry;
      this.loading = false;
      if(this.response.error){
        this.error = this.response.error;
      }
    })

  }

}
