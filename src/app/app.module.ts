import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HrisMenuModule } from 'projects/hris-menu/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HrisMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
