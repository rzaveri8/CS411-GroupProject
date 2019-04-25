import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobdataService {

  public job: string[];
  constructor(private http: HttpClient) { }

  jobsLocalStore: any;
  public jobsSaved: boolean = false;
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

  public saveJobsLocally(jobs){
    this.jobsSaved = true;
    this.jobsLocalStore = jobs;
  }

  public getLocallySavedJobs(){
    return this.jobsLocalStore;
  }
}

