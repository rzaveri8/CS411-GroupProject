import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseString } from 'xml2js';
import { ResumeService } from '../resume.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: any;
  fileToUpload: File = null;
  loading: boolean;


  constructor(public httpClient: HttpClient, private resumeService: ResumeService, private userS: UserService) { }

  resumeFormat()
  {
    // Changes to percents
    this.resume.rezscore.extended[0].pct_buzzwords[0] = this.resume.rezscore.extended[0].pct_buzzwords[0] * 100;
    this.resume.rezscore.extended[0].pct_buzzwords[0] = this.resume.rezscore.extended[0].pct_buzzwords[0].toFixed(2);

    this.resume.rezscore.extended[0].pct_whitespace[0] = this.resume.rezscore.extended[0].pct_whitespace[0] * 100;
    this.resume.rezscore.extended[0].pct_whitespace[0] = this.resume.rezscore.extended[0].pct_whitespace[0].toFixed(2);
    
    // Capitalizes first letter of most popular words
    this.resume.rezscore.language[0].word.forEach(element => {
      element.string[0] = element.string[0].charAt(0).toUpperCase() + element.string[0].slice(1);
    });

    // Uncapitalizes grade headline
    this.resume.rezscore.score[0].grade_headline[0] = this.resume.rezscore.score[0].grade_headline[0].charAt(0) + this.resume.rezscore.score[0].grade_headline[0].slice(1).toLowerCase();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.resume = undefined;
    this.loading = true;

    this.resumeService.postFile(this.fileToUpload).subscribe(data => {
        var res;
        parseString( data, function (err, result) {
          res = result;
        });
        this.resume = res;
        this.userS.updateResumeGrade(this.resume.rezscore.score[0].grade[0][0]);
        this.resumeFormat();
        console.log(this.resume);
        this.loading = false;
      }, error => {
        console.log(error);


      });
  }

  ngOnInit() {
  }

}
