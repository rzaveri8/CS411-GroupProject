import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  indeedRes: any; // response from indeed api
  glassRes: any; // response from glassdoor api

  // raw responses from apis before checking for errors
  rawIResponse: any;
  rawGResponse: any;

  position: string;
  company: string;

  indeedURL: string;
  glassURL: string;

  // if no job information is returned for given position and company
  errorMessage: boolean;
  gError: boolean;
  iError: boolean;

  // shows loading symbol
  loading: boolean;

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
    var baseI = "http://52.14.17.113:8080/api/indeed/";
    var baseG = "http://52.14.17.113:8082/api/glassdoor/"
    this.indeedURL = baseI + comp + "/" + pos;
    this.glassURL = baseG + comp + "/" + pos;
  }

  getJobs(){
    this.glassRes = undefined;
    this.indeedRes = undefined; //reset our jobs object so that the user doesn't see the old job information when doing a new search
    this.errorMessage = false; //reset error message
    this.gError = false;
    this.iError = false;
    this.loading = true;
    this.buildUrl();
    this.httpClient.get(this.glassURL).subscribe((res) => {
      this.rawGResponse = res;
      if(this.rawGResponse.responseType == 404){
        this.gError = true;
      }
      else{
        this.glassRes = this.rawGResponse;
      }
      this.errorMessage = (this.gError) || (this.iError); // if either operation has an error, show error message
      this.loading = false;
    });

    this.httpClient.get(this.indeedURL).subscribe((res) => {
      this.rawIResponse = res;
      if(this.rawIResponse.responseType == 404){
        this.iError = true;
      }
      else{
        this.iError = false;
        this.indeedRes = this.rawIResponse;
      }
      this.errorMessage = (this.gError) || (this.iError);
    });


  }

  ngOnInit() { }

}
