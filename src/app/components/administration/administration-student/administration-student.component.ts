import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../shared/services/student.service';
import {Student} from '../../../shared/models/student';

@Component({
  selector: 'app-administration-student',
  templateUrl: './administration-student.component.html',
  styleUrls: ['./administration-student.component.scss']
})
export class AdministrationStudentComponent implements OnInit {

  private students: Array<Student>;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(resolve => {
      this.students = resolve;
      console.log(resolve);
    }, error => {
      console.log('Err');
    });
  }

}
