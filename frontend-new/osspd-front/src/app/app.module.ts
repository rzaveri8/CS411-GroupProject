import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndeedRequestComponent } from './indeed-request/indeed-request.component';

@NgModule({
  declarations: [
    AppComponent,
    IndeedRequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
