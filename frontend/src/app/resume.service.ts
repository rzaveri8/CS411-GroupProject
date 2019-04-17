import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { parseString } from 'xml2js';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  postFile(fileToUpload: File): Observable<string> {

    console.log(fileToUpload);
    const endpoint = 'http://rezscore.com/a/f3f2cd/grade';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { responseType: 'text' });
}

  constructor(public httpClient: HttpClient) {
   }
}
