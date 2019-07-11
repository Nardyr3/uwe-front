import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../shared/services/student.service';
import {Student} from '../../../shared/models/student';

@Component({
  selector: 'app-administration-student',
  templateUrl: './administration-student.component.html',
  styleUrls: ['./administration-student.component.scss']
})
export class AdministrationStudentComponent implements OnInit {

  private source: Array<Student>;


  private settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      prenom: {
        title: 'First Name',
        type: 'string',
      },
      nom: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(resolve => {
      this.source = resolve;
      console.log(resolve);
    }, error => {
      console.log('Err');
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      console.log(event);
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      console.log(event);
    } else {
      event.confirm.reject();
    }
  }

}
