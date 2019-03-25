import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Calendar, OptionsInput } from '@fullcalendar/core';
import { fromEventPattern } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngu-fullcalendar',
  template: ``
})
// tslint:disable-next-line: component-class-suffix
export class NguCalendar implements OnInit {
  calendar: Calendar;
  @Input() options: OptionsInput;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.calendar = new Calendar(this.el.nativeElement, this.options);
    this.calendar.render();
  }

  event<T>(eventName: CalendarEvents) {
    return fromEventPattern<T>(
      handler => this.calendar.on(eventName, handler),
      handler => this.calendar.off(eventName, handler)
    );
  }
}

type CalendarEvents =
  | 'eventClick'
  | 'eventMouseEnter'
  | 'eventMouseLeave'
  | 'select'
  | 'unselect'
  | 'eventPositioned'
  | 'eventDestroy'
  | 'eventDragStart'
  | 'eventDragStop'
  | 'eventDrop'
  | 'eventResizeStart'
  | 'eventResizeStop'
  | 'eventResize'
  | 'drop'
  | 'dateClick'
  | 'eventReceive'
  | 'eventLeave'
  | 'eventRender';
