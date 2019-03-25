import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NguCalendar } from 'projects/calendar/src/public-api';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
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
    plugins: [dayGridPlugin]
  };

  constructor(private appService: AppService) {
    setTimeout(() => {
      this.events = this.appService.events;
    }, 3000);
  }

  ngAfterViewInit() {
    this.calendar
      .event<DateClickApi>('eventRender')
      .subscribe(res => console.log(res));
  }
}
