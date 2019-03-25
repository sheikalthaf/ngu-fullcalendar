import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguCalendarModule } from 'projects/calendar/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NguCalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
