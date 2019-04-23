import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobdataService {

  public job: string[];
  constructor() { }

  public getJobInfo()
  {
    return this.job;
  }

  public setJobInfo(job: any)
  {
    this.job = job;
  }
}
