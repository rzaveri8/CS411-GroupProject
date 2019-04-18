import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { ResumeComponent } from './resume/resume.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'job_search', component: JobsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'homepage', component: HomepageComponent }
  ];

@NgModule({
  exports: [ RouterModule
  ],
  declarations: [
    AppComponent,
    JobsComponent,
    ResumeComponent,
    DashboardComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
