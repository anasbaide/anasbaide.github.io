import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguagesComponent } from './languages/languages.component';
import { MatToolbar } from '@angular/material/toolbar';
import { ContactComponent } from './contact/contact.component';
import { CourseProjectsComponent } from './course-projects/course-projects.component';
import { DataAnalysisProjectsComponent } from './data-analysis-projects/data-analysis-projects.component';
import { WebsiteProjectsComponent } from './website-projects/website-projects.component';
import { AppProjectsComponent } from './app-projects/app-projects.component';
import { IntranetProjectComponent } from './intranet-project/intranet-project.component';
import { InProgressComponent } from './in-progress/in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WelcomeComponent,
    ProjectsComponent,
    NavbarComponent,
    LanguagesComponent,
    ContactComponent,
    CourseProjectsComponent,
    DataAnalysisProjectsComponent,
    WebsiteProjectsComponent,
    AppProjectsComponent,
    IntranetProjectComponent,
    InProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent},
      { path: 'course-projects', component: CourseProjectsComponent},
      { path: 'website-projects', component: WebsiteProjectsComponent},
      { path: 'data-projects', component: DataAnalysisProjectsComponent},
      { path: 'app-projects', component: AppProjectsComponent},
      { path: 'intranet-project', component: IntranetProjectComponent},
      { path: 'in-progress', component: InProgressComponent}
    ])
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
