import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProjectsPageComponent,
    PortfolioPageComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
