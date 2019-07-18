import {Component, OnInit} from '@angular/core';
import {Module} from '../../../../shared/models/module';
import {ActivatedRoute, Router} from '@angular/router';
import {ModuleService} from '../../../../shared/services/rest/module.service';
import {Student} from '../../../../shared/models/student';
import {NbDialogService} from '@nebular/theme';
import {ConfirmationModalComponent} from '../../../modals/confirmation-modal/confirmation-modal.component';
import {CustomDatePickerComponent} from '../custom-datepicker.component';
import {ComponentService} from '../../../../shared/services/rest/component.service';
import {Exam} from '../../../../shared/models/component';
import {CustomModuleButtonComponent} from '../custom-module-button.component';
import {CustomComponentButtonComponent} from './custom-component-button.component';

@Component({
  selector: 'app-administration-module',
  templateUrl: './administration-module.component.html',
  styleUrls: ['./administration-module.component.scss']
})
export class AdministrationModuleComponent implements OnInit {
  private currentModule = {} as Module;

  private componentSource: Array<Exam>;
  private studentSource: Array<Student>;

  private componentsSettings = {
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
      name: {
        title: 'Name',
        type: 'string'
      },
      coefficient: {
        title: 'Coefficient',
        type: 'number',
      },
      pass_date: {
        title: 'PassDate',
        type: 'html',
        editor: {type: 'custom', component: CustomDatePickerComponent}
      },
      customAction: {
        title: 'View exam',
        type: 'custom',
        renderComponent: CustomComponentButtonComponent,
        addable: false,
        editable: false,
        filter: false,
        sortable: false,
      },
    }
  };

  private studentsSettings = {
    hideSubHeader: true,
    actions: {
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      first_name: {
        title: 'Firstname',
        type: 'string',
      },
      last_name: {
        title: 'Lastname',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'address',
      },
    }
  };

  constructor(private route: ActivatedRoute, private moduleService: ModuleService, private dialogService: NbDialogService,
              private componentService: ComponentService) {
  }

  ngOnInit() {
    const moduleId = this.route.snapshot.paramMap.get('id');
    this.moduleService.getModuleById(Number(moduleId)).subscribe(resolve => {
      this.currentModule = resolve;
      this.componentSource = resolve.components;
      this.studentSource = resolve.students;
    });
  }

  public onDeleteStudentConfirm(event): void {
    const closeOnBackdropClick = false;
    this.dialogService.open(ConfirmationModalComponent, {
      closeOnBackdropClick, context: {
        confirmText: 'Do you really want to delete the student ' + event.data.first_name + ' ' + event.data.last_name +
          ' from the module ' + this.currentModule.name + ' ?',
      }
    }).onClose.subscribe(res => {
      console.log(res);
      if (res) {
        this.moduleService.removeStudent(this.currentModule.id, event.data.id).subscribe(result => {
          event.confirm.resolve();
        }, err => {
          event.confirm.reject();
        });
      } else {
        event.confirm.reject();
      }
    });

  }

  public onDeleteComponentConfirm(event): void {
    const closeOnBackdropClick = false;
    this.dialogService.open(ConfirmationModalComponent, {
      closeOnBackdropClick, context: {
        confirmText: 'Do you really want to delete the student ' + event.data.first_name + ' ' + event.data.last_name +
          ' from the module ' + this.currentModule.name + ' ?',
      }
    }).onClose.subscribe(res => {
      console.log(res);
      if (res) {

        const componentId = event.data.id;
        this.componentService.deleteComponent(componentId).subscribe(res => {
          this.componentSource = this.componentSource.filter((obj) => {
            return obj.id !== componentId;
          });
          event.confirm.resolve();
        }, error => {
          event.confirm.reject();
        });
      } else {
        event.confirm.reject();
      }
    });

  }

  public onSaveConfirm(event) {
    event.confirm.resolve();
  }

  public onCreateConfirm(event) {
    let newComponent = event.newData as Exam;
    newComponent.module_id = this.currentModule.id;
    this.componentService.createComponent(newComponent).subscribe(res => {
    });
    event.confirm.resolve();
  }

}
