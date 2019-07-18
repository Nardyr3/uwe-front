import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../../shared/services/rest/student.service';
import {Student} from '../../../shared/models/student';
import {CustomStudentButtonComponent} from './custom-student-button.component';
import {ConfirmationModalComponent} from '../../modals/confirmation-modal/confirmation-modal.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-administration-students',
  templateUrl: './administration-students.component.html',
  styleUrls: ['./administration-students.component.scss']
})
export class AdministrationStudentsComponent implements OnInit {

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
      first_name: {
        title: 'First Name',
        type: 'string',
      },
      last_name: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      customAction: {
        title: 'View the module',
        type: 'custom',
        renderComponent: CustomStudentButtonComponent,
        addable: false,
        editable: false,
        filter: false,
        sortable: false,
      },
    }
  };

  constructor(private studentService: StudentService, private dialogService: NbDialogService) {
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(resolve => {
      this.source = resolve;
    }, error => {
      console.log('Err');
    });
  }

  public onDeleteConfirm(event): void {
    const closeOnBackdropClick = false;
    this.dialogService.open(ConfirmationModalComponent, {
      closeOnBackdropClick, context: {
        confirmText: 'Do you really want to delete the student ' + event.data.first_name + ' ' + event.data.last_name + '?',
      }
    }).onClose.subscribe(res => {
      if (res) {
        const studentId = event.data.id;
        this.studentService.deleteStudent(studentId).subscribe(res => {
          this.source = this.source.filter((obj) => {
            return obj.id !== studentId;
          });
          event.confirm.resolve();
        });
      } else {
        event.confirm.reject();
      }
    });
  }

  public onSaveConfirm(event) {
    /*this.studentService.editStudent(event.newData).subscribe(res => {
      console.log('updated');
    });*/
    event.confirm.resolve();
  }

  public onCreateConfirm(event) {
    this.studentService.createStudent(event.newData).subscribe(res => {
      console.log('created');
      event.confirm.resolve();
    }, error => {
      event.confirm.reject();
    });
  }

}
