import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AanleveringFormComponent} from './aanlevering/aanlevering-form.component';

import { AppComponent } from './app.component';
import {AanleveringService} from "./aanlevering/aanlevering.service";
import {NotificatieFormComponent} from "./notificatie/notificatie-form.component";
import {NotificatieService} from "./notificatie/notificatie.service";

@NgModule({
  declarations: [
    AppComponent,
    AanleveringFormComponent,
    NotificatieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AanleveringService, NotificatieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
