import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AanleveringFormComponent} from './aanlevering/aanlevering-form.component';

import { AppComponent } from './app.component';
import {AanleveringService} from "./aanlevering/aanlevering.service";

@NgModule({
  declarations: [
    AppComponent,
    AanleveringFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AanleveringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
