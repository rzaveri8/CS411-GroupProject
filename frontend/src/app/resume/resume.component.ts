import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseString } from 'xml2js';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: any;
  fileToUpload: File = null;

  constructor(public httpClient: HttpClient, private resumeService: ResumeService) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.resumeService.postFile(this.fileToUpload).subscribe(data => {
        var res;
        parseString( data, function (err, result) {
          res = result;
        });
        this.resume = res;
        console.log(this.resume);
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

}
