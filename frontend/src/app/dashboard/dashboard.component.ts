import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { allSettled } from 'q';
import { UserService } from '../user.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profile: any =[];
  rawIndustry: string;

  constructor(public httpClient: HttpClient, private router: Router, private user: UserService) { }

  getProfile() {
    this.httpClient.get("/api/user").subscribe((res) => {
      this.profile = res;
      if (this.profile.industry == undefined)
      {
        this.updateIndustry();
      }
    });
  }

  parsePosition(position_string){
    var raw = position_string;
    var string_contents = raw.split(" ");

    //check if only one word passed into position
    if(string_contents.length == 1){ //capitalize word and return
        var parsed = raw.charAt(0).toUpperCase() + raw.slice(1);
        //extract the first character of this string and "capitalize" it, and then leave the rest of the string as is and append it to a new string
        //console.log(position_string);
        return parsed;
    }

    //else run loop to capitalize each word
    for(var i=0;i<string_contents.length;i++){
      var raw_curr_string = string_contents[i];
      var parsed_string = raw_curr_string.charAt(0).toUpperCase() + raw_curr_string.slice(1);
      string_contents[i] = parsed_string;

    }

    //add space in between strings
    var parsed = string_contents.join(" ");
    return parsed;
  }


  updateIndustry()  {
    $("#myModal").modal();
    this.profile.industry = this.parsePosition(this.rawIndustry);
    this.user.updateIndustry(this.profile.industry).subscribe((res)=>{
      alert("The industry was updated !");
    }, (error)=>{
      alert(error.error);
    })
  }

  ngOnInit() {
    this.getProfile();
  };

}
