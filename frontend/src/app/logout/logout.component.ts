import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(public http: HttpClient) { }

  response: any;


  ngOnInit() {
    this.http.get("/api/logout").subscribe((res) => {
      //console.log("Attempting to logout");
      //console.log(this.response);
      this.response = res;
    })
  }

}
