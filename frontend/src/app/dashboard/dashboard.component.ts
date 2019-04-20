import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { allSettled } from 'q';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile: any =[];
  logInStatus: number;
  acct_response: any;
  constructor(public httpClient: HttpClient, private router: Router) { }

  getProfile() {
    this.httpClient.get("/api/user").subscribe((res) => {
      this.profile = res;
    });
  }

  ngOnInit() {
    this.httpClient.get("/api/isLoggedIn").subscribe((res) => {
      this.acct_response = res;
      this.logInStatus = this.acct_response.logInStatus;
      if(this.logInStatus == 0){
        alert("You are not logged in. Take a u-turn");
        this.router.navigate['./homepage'];
      }
      else{
        alert("You are logged in. Pat yourself on the back");
      }
    })

    this.getProfile();
  };

}
