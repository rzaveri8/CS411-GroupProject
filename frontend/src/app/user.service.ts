import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
