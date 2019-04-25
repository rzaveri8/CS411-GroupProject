import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { ResumeComponent } from './resume/resume.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecommenderComponent } from './recommender/recommender.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
// Define the routes

const ROUTES = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'jobs',
    canActivate: [AuthGuard],
    component: JobsComponent
  },
  {
    path: 'resume',
    canActivate: [AuthGuard],
    component: ResumeComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'recommender',
    canActivate: [AuthGuard],
    component: RecommenderComponent
  },
  {
    path: 'logout',
    canActivate: [AuthGuard],
    component: LogoutComponent
  }
];

@NgModule({
  exports: [ RouterModule
  ],
  declarations: [
    AppComponent,
    JobsComponent,
    ResumeComponent,
    DashboardComponent,
    HomepageComponent,
    RecommenderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES), //add routes to app
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


