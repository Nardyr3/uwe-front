import {Component, OnInit} from '@angular/core';
import {ComponentService} from '../../../shared/services/rest/component.service';
import {ActivatedRoute} from '@angular/router';
import {Exam} from '../../../shared/models/component';
import {Mark} from '../../../shared/models/mark';
import {ConfirmationModalComponent} from '../../modals/confirmation-modal/confirmation-modal.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-administration-component',
  templateUrl: './administration-component.component.html',
  styleUrls: ['./administration-component.component.scss']
})
export class AdministrationComponentComponent implements OnInit {

  private currentComponent: Exam;

  private markSource: Array<Mark>;

  private markSettings = {
    hideSubHeader: true,
    actions: {
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      value: {
        title: 'Grade',
        type: 'number',
      },
      first_name: {
        title: 'Firstname',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.student.first_name;
        },
      },
      last_name: {
        title: 'Lastname',
        type: 'string',
        valuePrepareFunction: (cell, row) => {
          return row.student.last_name;
        },
      },
    }
  };

  constructor(private componentService: ComponentService, private route: ActivatedRoute, private dialogService: NbDialogService) {
  }

  ngOnInit() {
    const componentId = this.route.snapshot.paramMap.get('id');
    this.componentService.getMarksByComponent(Number(componentId)).subscribe(resolve => {
      this.currentComponent = resolve;
      console.log(this.currentComponent);
      this.markSource = this.currentComponent.marks;
    });
  }

  public onDeleteMarkConfirm(event): void {
    const closeOnBackdropClick = false;
    this.dialogService.open(ConfirmationModalComponent, {
      closeOnBackdropClick, context: {
        confirmText: 'Do you really want to delete this mark ? ',
      }
    }).onClose.subscribe(res => {
      if (res) {
        const studentId = event.data.id;
        /*this.studentService.deleteStudent(studentId).subscribe(res => {
          this.source = this.source.filter((obj) => {
            return obj.id !== studentId;
          });
          event.confirm.resolve();
        });*/
      } else {
        event.confirm.reject();
      }
    });
  }

}
