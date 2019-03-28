import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[];

  constructor(public httpClient: HttpClient) { }

  // getJobs(): void {
  //   this.jobService.getJobs().subscribe(x => this.jobs = x);
  // }

  getJobs(){
    this.httpClient.get('http://52.14.17.113:8080/api/all/amazon/Software+Engineer').subscribe((res) => {
      //this.jobs = res;
      // let jobArray = new Job();
      // jobArray.rating = this.jobs.rating;
      // jobArray.reviews = this.jobs.reviews;
      // jobArray.pros = this.jobs.pros;
      // jobArray.cons = this.jobs.cons;
      // console.log(jobArray);
      // this.jobs[0] = jobArray;
      console.log(res);
    });
  }

  ngOnInit() {
    this.getJobs();
    /*
    this.jobs = new Job();
    this.jobs.rating = 3.14;
    this.jobs.reviews = ["hello", "world"];
    */
  }

}

// console.log(this.jobs);
