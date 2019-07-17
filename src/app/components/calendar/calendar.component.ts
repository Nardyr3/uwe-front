import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ActivatedRoute} from '@angular/router';
import {Calendar, EventInput} from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    {  title: 'My Event',
      start: '2019-07-01',
      url: '/login'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onClick(info) {
    if (info.event.url) {
      window.open(info.event.url);
    }
  }

}
