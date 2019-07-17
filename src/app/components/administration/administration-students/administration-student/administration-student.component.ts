import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../../../shared/services/rest/student.service';
import {Student} from '../../../../shared/models/student';
import {Module} from '../../../../shared/models/module';

@Component({
  selector: 'app-administration-student',
  templateUrl: './administration-student.component.html',
  styleUrls: ['./administration-student.component.scss']
})
export class AdministrationStudentComponent implements OnInit {
  private currentStudent: Student;
  private moduleSubscribed: Array<Module>;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(Number(studentId)).subscribe(resolve => {
      console.log(resolve);
      this.currentStudent = resolve;
      this.moduleSubscribed = this.currentStudent.modules;
    });
  }

}
