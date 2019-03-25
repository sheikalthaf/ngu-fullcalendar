import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Calendar, OptionsInput } from '@fullcalendar/core';
import { fromEventPattern } from 'rxjs';
import { DateClickApi } from '@fullcalendar/core/Calendar';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngu-fullcalendar',
  template: ``,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
// tslint:disable-next-line: component-class-suffix
export class NguCalendar implements OnInit {
  calendar: Calendar;
  @Input() options: OptionsInput;

  @Output() datesRender = new EventEmitter();
  @Output() datesDestroy = new EventEmitter();
  @Output() dayRender = new EventEmitter();
  @Output() windowResize = new EventEmitter();
  @Output() dateClick = new EventEmitter<DateClickApi>();
  @Output() eventClick = new EventEmitter();
  @Output() eventMouseEnter = new EventEmitter();
  @Output() eventMouseLeave = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() unselect = new EventEmitter();
  @Output() eventDataTransform = new EventEmitter();
  @Output() loading = new EventEmitter();
  @Output() eventRender = new EventEmitter();
  @Output() eventPositioned = new EventEmitter();
  @Output() eventDestroy = new EventEmitter();
  @Output() eventDragStart = new EventEmitter();
  @Output() eventDragStop = new EventEmitter();
  @Output() eventDrop = new EventEmitter();
  @Output() eventResizeStart = new EventEmitter();
  @Output() eventResizeStop = new EventEmitter();
  @Output() eventResize = new EventEmitter();
  @Output() drop = new EventEmitter();
  @Output() eventReceive = new EventEmitter();
  @Output() eventLeave = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const options: OptionsInput = {
      ...this.options,
      datesRender: args => this.datesRender.emit(args),
      datesDestroy: args => this.datesDestroy.emit(args),
      dayRender: args => this.dayRender.emit(args),
      windowResize: args => this.windowResize.emit(args),
      dateClick: args => this.dateClick.emit(args),
      eventClick: args => this.eventClick.emit(args),
      eventMouseEnter: args => this.eventMouseEnter.emit(args),
      eventMouseLeave: args => this.eventMouseLeave.emit(args),
      select: args => this.select.emit(args),
      unselect: args => this.unselect.emit(args),
      // eventDataTransform: args => this.eventDataTransform.emit(args),
      loading: args => this.loading.emit(args),
      eventRender: args => this.eventRender.emit(args),
      eventPositioned: args => this.eventPositioned.emit(args),
      eventDestroy: args => this.eventDestroy.emit(args),
      eventDragStart: args => this.eventDragStart.emit(args),
      eventDragStop: args => this.eventDragStop.emit(args),
      eventDrop: args => this.eventDrop.emit(args),
      eventResizeStart: args => this.eventResizeStart.emit(args),
      eventResizeStop: args => this.eventResizeStop.emit(args),
      eventResize: args => this.eventResize.emit(args),
      drop: args => this.drop.emit(args),
      eventReceive: args => this.eventReceive.emit(args),
      eventLeave: args => this.eventLeave.emit(args)
    };
    this.calendar = new Calendar(this.el.nativeElement, options);
    this.calendar.render();
  }

  // event<T>(eventName: CalendarEvents) {
  //   return fromEventPattern<T>(
  //     handler => this.calendar.on(eventName, handler),
  //     handler => this.calendar.off(eventName, handler)
  //   );
  // }
}

type CalendarEvents =
  | 'datesRender'
  | 'datesDestroy'
  | 'dayRender'
  | 'windowResize'
  | 'dateClick'
  | 'eventClick'
  | 'eventMouseEnter'
  | 'eventMouseLeave'
  | 'select'
  | 'unselect'
  | 'eventDataTransform'
  | 'loading'
  | 'eventRender'
  | 'eventPositioned'
  | '_eventsPositioned'
  | 'eventDestroy'
  | 'eventDragStart'
  | 'eventDragStop'
  | 'eventDrop'
  | 'eventResizeStart'
  | 'eventResizeStop'
  | 'eventResize'
  | 'drop'
  | 'eventReceive'
  | 'eventLeave';

export type CalendarDefaultView =
  | 'dayGridMonth'
  | 'dayGridWeek'
  | 'dayGridDay'
  | 'timeGridWeek'
  | 'timeGridDay';
