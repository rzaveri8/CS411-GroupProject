import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  postFile(fileToUpload: File): Observable<string> {
    const endpoint = 'http://rezscore.com/a/f3f2cd/grade';
    const formData: FormData = new FormData();
    formData.append('resume', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { responseType: 'text' });
}

  constructor(public httpClient: HttpClient) {
   }
}
