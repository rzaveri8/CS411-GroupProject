import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobdataService } from '../jobdata.service';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../user.service';
import { parseString } from 'xml2js';



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

  rawIndustry: any;

  selectedJob: string[];
  canSearch: boolean;

  jobSearch(job: string[]) {
    this.selectedJob = job;
    this.data.setJobInfo(this.selectedJob);
    $("#myModal").modal();
  }

  updateUserIndustry(){
    // $("#posModal").modal({
    //   backdrop: 'static',
    //   keyboard: false
    // });
    console.log("The input is ");
    console.log(this.industry); 
    this.industry = this.rawIndustry;   
    this.error = "";
    this.user.updateIndustry(this.industry).subscribe((res) => {
        this.refresh();
    });
  }

  refresh()
  {
    this.http.get("/api/jobs/").subscribe((res)=>{
      this.response = res;
      this.jobs = this.response.data;
      this.loading = false;
      this.error = "";
    }, (error) => {
      this.loading = false;
      this.error = error.error.error;
      console.log("error with getJobs");
    })
  }

  confirmUserIndustryAndGetJobs(){
      this.user.getIndustry().subscribe((res) => {
        this.response = res;
        this.industry = this.response.industry;
        this.http.get("/api/jobs/").subscribe((res)=>{
          this.response = res;
          this.jobs = this.response.data;
          this.loading = false;
          this.error = "";
        }, (error) => {
          this.loading = false;
          this.error = error.error.error;
          console.log("error with getJobs");
        })
      }, (error) => {
        //Assume that the user does not have an industry set
        alert(error.error);
        this.loading = false; 
        this.error = error.error;
        this.canSearch = false; 
        if (this.industry == undefined)
        {
          $("#posModal").modal({
            backdrop: 'static',
            keyboard: false
          });
        }
      })
  }

  ngOnInit() {
    this.loading = true;
    this.error = "";
    this.confirmUserIndustryAndGetJobs();
  }

}