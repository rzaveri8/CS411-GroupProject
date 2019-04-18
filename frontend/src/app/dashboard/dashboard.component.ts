import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile: any =[];
  constructor(public httpClient: HttpClient) { }

    getProfile() {

      // return this.httpClient.get('/api/test')
      //   .subscribe((res) => 
      //     {
      //       console.log(res);
      //       this.profile = res;
      //     })
      this.profile = "hi";
      return;
    }

  ngOnInit() {
    this.getProfile();
  }

}
