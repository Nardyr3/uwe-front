import { Component, OnInit } from '@angular/core';
import {AppstateService} from '../../shared/services/appstate.service';
import {Student} from '../../shared/models/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  private student: Student;

  constructor(protected appState: AppstateService) { }

  ngOnInit() {
    this.student = this.appState.user;
  }

}
