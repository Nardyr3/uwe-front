import {Component, OnInit, ViewChild} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ActivatedRoute} from '@angular/router';
import {Calendar, EventInput} from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ComponentService} from '../../shared/services/rest/component.service';
import {Exam} from '../../shared/models/component';


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

  constructor(private componentService: ComponentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.componentService.getComponents().subscribe(res => {
      console.log(res);
      this.calendarEvents = this.toEvent(res);
      console.log(this.calendarEvents);
    });
  }
  onClick(info) {
    if (info.event.url) {
      window.open(info.event.url);
    }
  }
  private toEvent(components: Exam[]): EventInput[] {
    const tempEvent: EventInput[] = [];
    components.forEach(component => tempEvent.push( { title: component.name,
          start: component.pass_date, url: '/component/' + component.id }));
    return tempEvent;
  }

}
