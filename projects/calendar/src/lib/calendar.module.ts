import { NgModule } from '@angular/core';
import { NguCalendar } from './calendar.component';
import { NguCalendarEvent } from './calendar-events';

@NgModule({
  declarations: [NguCalendar, NguCalendarEvent],
  imports: [],
  exports: [NguCalendar, NguCalendarEvent]
})
export class NguCalendarModule {}
