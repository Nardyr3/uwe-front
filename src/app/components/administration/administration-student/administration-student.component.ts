import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../shared/services/student.service';
import {Student} from '../../../shared/models/student';
import {ButtonRenderComponent} from './button-render/button-render.component';

@Component({
  selector: 'app-administration-student',
  templateUrl: './administration-student.component.html',
  styleUrls: ['./administration-student.component.scss']
})
export class AdministrationStudentComponent implements OnInit {

  private source: Array<Student>;


  private settings = {
    add: {
      addButtonContent: '<i class="fas fa-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      type: 'custom',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
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
      grade: {
        title: 'Add Grade',
        type: 'custom',
        renderComponent: ButtonRenderComponent,
        editable: false,
        addable: false,
        sortable: false,
        filter: false,
      }
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
    console.log(event);
    event.confirm.resolve();
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      console.log(event);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
