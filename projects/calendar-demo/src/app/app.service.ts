import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class AppService {
  events = Array(5)
    .fill('')
    .map((_, i) => {
      const da = moment()
        .add(i, 'days')
        .format('YYYY-MM-DD');
      return {
        start: da,
        end: da,
        id: i + 1,
        title: 'test message ' + (i + 1)
      };
    });
}
