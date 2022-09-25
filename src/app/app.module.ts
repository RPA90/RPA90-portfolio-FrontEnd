import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { ExpComponent } from './exp/exp.component';
import { EducComponent } from './educ/educ.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjComponent } from './proj/proj.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    ExpComponent,
    EducComponent,
    SkillsComponent,
    ProjComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }