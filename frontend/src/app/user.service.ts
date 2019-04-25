import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  response: any;
  industry: string;

  public getIndustry(){
    return this.http.get("/api/user/getIndustry");
  }

  public updateIndustry(newIndustry: string){
    return this.http.post("/api/user/setIndustry",newIndustry);
  }

  public updateResumeGrade(resumeGrade: string){
    console.log("inside updateResumeGrade");
    console.log(resumeGrade);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      })
    };
    var body = "grade=" + resumeGrade;
    this.http.post("/api/user/setresumegrade",body, httpOptions).subscribe((res) => {
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
