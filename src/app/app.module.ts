import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AanleveringFormComponent} from './aanlevering/aanlevering-form.component';

import { AppComponent } from './app.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
