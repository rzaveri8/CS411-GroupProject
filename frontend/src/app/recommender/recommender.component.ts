import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobdataService } from '../jobdata.service';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../user.service';


declare var $: any;

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  constructor(private http: HttpClient, private data: JobdataService, private user: UserService) { }

  response: any;
  jobs: any;
  industry: any;
  error: string;
  loading: boolean;

  selectedJob: string[];
  canSearch: boolean;

  jobSearch(job: string[]) {
    this.selectedJob = job;
    this.data.setJobInfo(this.selectedJob);
    $("#myModal").modal();
  }

  updateUserIndustry(){
    $("#posModal").modal({
      backdrop: 'static',
      keyboard: false
    });
    console.log("The input is ");
    console.log(this.industry);    
    this.user.updateIndustry(this.industry);
  }

  confirmUserIndustryAndGetJobs(){
      this.user.getIndustry().subscribe((res) => {
        this.response = res;
        this.industry = this.response.industry;
        if (this.industry == undefined)
        {
          this.updateUserIndustry();
        }
        this.http.get("/api/jobs/" + this.industry).subscribe((res)=>{
          this.response = res;
          this.jobs = this.response.data;
          this.loading = false;
        }, (error) => {
          this.loading = false;
          this.error = error.error.error;
          console.log("error with getJobs");
        })
      }, (error) => {
        this.loading = false; 
        this.error = error.error;
        this.canSearch = false; //Assume that the user does not have an industry set
      })
  }

  ngOnInit() {
    this.loading = true;
    this.error = "";
    this.confirmUserIndustryAndGetJobs();
  }

}