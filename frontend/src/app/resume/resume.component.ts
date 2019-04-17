import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseString } from 'xml2js';
import { ResumeService } from '../resume.service';


// declare var require: any;
// const example = require('../../../../linkedin/app');

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  resume: any;

  resStr: string;

  fileToUpload: File = null;

  constructor(public httpClient: HttpClient, private resumeService: ResumeService) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.resumeService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  getResume()
  {
    var link = "http://rezscore.com/a/f3f2cd/grade?resume=" + this.resStr;
    this.httpClient.get(link, { responseType: 'text' } ).subscribe(response => {
      var res;
      parseString( response, function (err, result) {
        console.dir(result); // Prints JSON object!
        res = result;
      });
      this.resume = res;
    });
  }

  ngOnInit() {

    // testng();
  }

}
