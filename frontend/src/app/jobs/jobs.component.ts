import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobdataService } from '../jobdata.service';

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
  gError: boolean;
  iError: boolean;

  // shows loading symbol
  glassLoad: boolean;
  indeedLoad: boolean;

  // holds count of offers
  offers: any[];

  constructor(public httpClient: HttpClient, private data: JobdataService) { }


  parseInput(input_string: string, separator: string): string{
    input_string = input_string.toLowerCase();
    var string_contents = input_string.split(" ");

    //check if only one word passed into position
    if(string_contents.length == 1){ 
        return input_string;
    }

    //else add seperator in between words
    var parsed_input = string_contents.join(separator);
    return parsed_input;
  }

  buildUrl(){
    var comp: string = this.parseInput(this.company, " ");
    var pos: string = this.parseInput(this.position, "+");
    var baseI = "http://52.14.17.113:8080/api/indeed/";
    var baseG = "/api/glassdoor/"
    this.indeedURL = baseI + comp + "/" + pos;
    this.glassURL = baseG + comp + "/" + pos;
    console.log("Indeed request url: " + this.indeedURL);
    console.log("Glassdoor request url: " + this.glassURL);
  }

  // calculates how many offers accepted, declined, or not given
  calcOffers()
  {
    var off = this.glassRes.offers;
    var yes = 0;
    var decline = 0;
    var no = 0;
    off.forEach(element => {
      if (element == "No Offer")
        no++;
      else if (element == "Declined Offer")
        decline++;
      else if (element == "Accepted Offer")
        yes++;
    });

    this.offers = [yes, decline, no];
  }
 
  // api call for glassdoor
  getGlass()
  {
    this.httpClient.get(this.glassURL).subscribe((res) => {
      this.rawGResponse = res;
      this.gError = false;
      this.glassRes = this.rawGResponse;
      console.log("success from glassdoor");
      this.calcOffers();
      this.glassLoad = false;
    },
    (err) => {
      console.log("error with glassdoor");
      console.log(err.error);
      this.gError = true;
      this.glassLoad = false;
    });
  }

  // api call for indeed
  getIndeed() {
    this.httpClient.get(this.indeedURL).subscribe((res) => {
      this.rawIResponse = res;
      if (this.rawIResponse.responseType == 404)
      {
        console.log("error with indeed");
        console.log(this.rawIResponse);
        this.iError = true;
        this.indeedLoad = false;
      }
      else {
        this.iError = false;
        this.indeedRes = this.rawIResponse;
        this.indeedRes.rating = this.indeedRes.rating.toFixed(3);
        this.indeedLoad = false;
        console.log("success from indeed");
      }
      
    },
    (err) => {
      console.log("error with indeed");
      console.log(err.error);
      this.iError = true;
      this.indeedLoad = false;
    });
  }

  // executes on search button click
  getJobs(){
    this.glassRes = undefined;
    this.indeedRes = undefined; //reset our jobs object so that the user doesn't see the old job information when doing a new search
    this.gError = false;
    this.iError = false;
    this.indeedLoad = true;
    this.glassLoad = true;
    this.buildUrl();
    this.getGlass();
    this.getIndeed();
  }

  ngOnInit() {
    // pulls info from Jobdata service if there is anything there to grab 
    // (ie, user routed to this page by clicking on a recommended job)
    var jobdata = this.data.getJobInfo();
    if (jobdata != undefined)
    {
      this.position = jobdata[0];
      this.company = jobdata[1];
      jobdata = undefined;
      this.data.setJobInfo(jobdata); // resets this to undefined after the info has been pulled
      this.getJobs();
    }
   }

}
