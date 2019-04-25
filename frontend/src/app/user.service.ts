import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };

  response: any;
  public updatedIndustry: boolean = false;
  public industry: string = undefined;


  public getIndustry(){
    this.updatedIndustry = false;
    return this.http.get("/api/user/getIndustry");
  }

  public updateIndustry(newIndustry: string){
    this.updatedIndustry = true;
    this.industry = newIndustry;
    const reqBody: string = "industry=" + newIndustry;
    return this.http.post("/api/user/setIndustry", reqBody, this.httpOptions);
  }

  public updateResumeGrade(resumeGrade: string){
    var body = "grade=" + resumeGrade;
    this.http.post("/api/user/setresumegrade",body, this.httpOptions).subscribe((res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    });
  }
  public getResumeGrade(){
    return this.http.get("/api/user/getresumegrade");
  }

}
