import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


/* This service allows us to protect our routes and ensure that the user is logged in before they can access them. */
export class AuthGuard implements CanActivate  {

  constructor(public http: HttpClient) {}
  isLoggedIn: number;
  response: any;
  async canActivate(){
    this.response = await this.http.get("/api/isLoggedIn").toPromise();
    console.log("The response is " + this.response);
    this.isLoggedIn = this.response.logInStatus;
    if(this.isLoggedIn == 1){
      console.log("The user is logged in");
      console.log(this.isLoggedIn);
      return true;
    }
    else{
      alert("You are not logged in. Please exit the premises");
      console.log(this.isLoggedIn);
      return false;
    }
  }
}
