import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  response: any;
  jobs: any;
  industry: string;
  error: string;
  ngOnInit() {
    this.http.get("/api/jobs").subscribe((res)=> {
      this.response = res;
      this.jobs = this.response.data;
      this.industry = this.response.industry;
      if(this.response.error){
        this.error = this.response.error;
      }
    })

  }

}
