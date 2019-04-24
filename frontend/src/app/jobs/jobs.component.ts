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
  error: boolean;
  gError: boolean;
  iError: boolean;

  // shows loading symbol
  loading: boolean;

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
  }

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

  getGlass()
  {
    this.httpClient.get(this.glassURL).subscribe((res) => {
      this.rawGResponse = res;
      this.gError = false;
      this.glassRes = this.rawGResponse;
      this.error = (this.gError) && (this.iError); // if either operation has an error, show error message
      console.log("success from glassdoor");
      this.calcOffers();
    },
    (err) => {
      console.log(err);
      console.log("error with glassdoor");
      this.gError = true;
      this.error = (this.gError) && (this.iError); // if either operation has an error, show error message
    });
  }

  getIndeed() {
    this.httpClient.get(this.indeedURL).subscribe((res) => {
      this.rawIResponse = res;
      if (this.rawIResponse.responseType == 404)
      {
        console.log("error with indeed");
        this.iError = true;
        this.error = (this.gError) && (this.iError);
        this.loading = false;
      }
      else {
        this.iError = false;
        this.indeedRes = this.rawIResponse;
        this.indeedRes.rating = this.indeedRes.rating.toFixed(3);
        this.error = (this.gError) && (this.iError);
        this.loading = false; // indeed finishes last
        console.log("success from indeed");
      }
      
    },
    (err) => {
      console.log("error with indeed");
      this.iError = true;
      this.error = (this.gError) && (this.iError);
      this.loading = false;
    });
  }

  getJobs(){
    this.glassRes = undefined;
    this.indeedRes = undefined; //reset our jobs object so that the user doesn't see the old job information when doing a new search
    this.error = false; //reset error message
    this.gError = false;
    this.iError = false;
    this.loading = true;
    this.buildUrl();
    this.getGlass();
    this.getIndeed();
    this.error = (this.gError) && (this.iError);
  }

  ngOnInit() {
    var jobdata = this.data.getJobInfo();
    if (jobdata != undefined)
    {
      this.position = jobdata[0];
      this.company = jobdata[1];
      jobdata = undefined;
      this.data.setJobInfo(jobdata);
      this.getJobs();
    }
   }

}
