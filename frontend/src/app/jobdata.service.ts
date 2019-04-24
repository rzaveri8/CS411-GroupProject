import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobdataService {

  public job: string[];
  constructor(private http: HttpClient) { }

  public getJobInfo()
  {
    return this.job;
  }

  public setJobInfo(job: any)
  {
    this.job = job;
  }
  public getJobs(){
    return this.http.get("/api/jobs");
  }
}
