import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  NguCalendar,
  CalendarDefaultView
} from 'projects/calendar/src/public-api';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listGridPlugin from '@fullcalendar/list';
import { DateClickApi } from '@fullcalendar/core/Calendar';
import { EventSourceInput } from '@fullcalendar/core/structs/event-source';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'calendar-demo';

  @ViewChild(NguCalendar) calendar: NguCalendar;

  events: EventSourceInput[] = [];

  options: OptionsInput = {
    plugins: [dayGridPlugin, timeGridPlugin, listGridPlugin],
    defaultView: 'dayGridMonth' as CalendarDefaultView
  };

  constructor(private appService: AppService) {
    setTimeout(() => {
      this.events = this.appService.events;
    }, 3000);
  }

  dateClicked(args) {
    console.log(args);
  }

  eventRenderer(args) {
    console.log(args);
  }

  ngAfterViewInit() {
    // this.calendar
    //   .event<DateClickApi>('eventRender')
    //   .subscribe(res => console.log(res));
  }
}
