import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseString } from 'xml2js';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  resume: any;


  constructor(public httpClient: HttpClient) { }

  getResume()
  {
    this.httpClient.get("http://rezscore.com/a/f3f2cd/grade?resume=CINDY", { responseType: 'text' } ).subscribe(response => {
      var res;
      parseString( response, function (err, result) {
        console.dir(result); // Prints JSON object!
        res = result;
      });
      this.resume = res;
    });
  }

  ngOnInit() {
  }

}
