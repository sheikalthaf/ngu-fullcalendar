import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NguCalendar } from './calendar';
import { EventApi } from '@fullcalendar/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngu-fullcalendar-event',
  template: ''
})
// tslint:disable-next-line: component-class-suffix
export class NguCalendarEvent implements OnInit, OnDestroy {
  @Input() event: any;
  eventSource: EventApi;

  constructor(private calendar: NguCalendar) {}

  ngOnInit() {
    if (this.event) {
      this.eventSource = this.calendar.calendar.addEvent(this.event);
    }
  }

  ngOnDestroy() {
    this.eventSource.remove();
  }
}
