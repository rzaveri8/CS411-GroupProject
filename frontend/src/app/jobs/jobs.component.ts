import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any;

  position: string;
  company: string;

  fullURL: string;

  constructor(public httpClient: HttpClient) { }

  parseCompany(company_string){
    var raw = company_string;
    return raw.replace(/\s+/g, '-').toLowerCase();
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

    //add '+' seperator in between strings
    var parsed = string_contents.join("+");
    //console.log(parsed);
    return parsed;
  }

  buildUrl(){
    var comp = this.parseCompany(this.company);
    var pos = this.parsePosition(this.position);
    var baseUrl = "http://52.14.17.113:8080/api/all/";
    this.fullURL = baseUrl + comp + "/" + pos;
  }

  getJobs(){
    this.buildUrl();
    this.httpClient.get(this.fullURL).subscribe((res) => {
      this.jobs = res;
    });
  }

  ngOnInit() {

    this.getJobs();
    // this.jobs = new Job();
    // this.jobs.rating = 3.14;
    // this.jobs.reviews = ["hello", "world"];

  }

}
