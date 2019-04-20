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
  constructor(public httpClient: HttpClient, private router: Router) { }

  getProfile() {
    this.httpClient.get("/api/user").subscribe((res) => {
      this.profile = res;
    });
  }

  ngOnInit() {
    this.getProfile();
  };

}
