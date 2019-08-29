import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { EmployeComponent } from './employe/employe.component';
import { EleveComponent } from "./eleve/eleve.component";

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    EmployeComponent,
    EleveComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
