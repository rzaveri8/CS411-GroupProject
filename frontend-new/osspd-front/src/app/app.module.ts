import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel

import { AppComponent } from './app.component';
import { IndeedRequestComponent } from './indeed-request/indeed-request.component';
import { RandomComponent } from './random/random.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    IndeedRequestComponent,
    RandomComponent,
    JobsearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
