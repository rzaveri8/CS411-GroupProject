import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobdataService } from '../jobdata.service';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../user.service';
import { parseString } from 'xml2js';



declare var $: any;

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(private http: HttpClient, private data: JobdataService, private user: UserService) { }

  jobs: any;
  error: string;
  loading: boolean;
   /*jobSearch(job: string[]) {
    this.selectedJob = job;
    this.data.setJobInfo(this.selectedJob);
    $("#myModal").modal();
  } */

  ngOnInit() {
    this.http.get("/api/user/getSaveJob").subscribe((res) => {
      this.jobs = res;
      console.log(this.jobs);
      this.loading = false;
      this.error = "";
      //this.data.saveJobsLocally(this.jobs);

      console.log("yay");
    },
    (err) => {
      console.log("boo");
    })
  }

}
