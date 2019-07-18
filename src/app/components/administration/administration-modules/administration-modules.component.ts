import {Component, OnInit} from '@angular/core';
import {Module} from '../../../shared/models/module';
import {ModuleService} from '../../../shared/services/rest/module.service';
import {Router} from '@angular/router';
import {CustomModuleButtonComponent} from './custom-module-button.component';
import {ConfirmationModalComponent} from '../../modals/confirmation-modal/confirmation-modal.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-administration-module',
  templateUrl: './administration-modules.component.html',
  styleUrls: ['./administration-modules.component.scss']
})
export class AdministrationModulesComponent implements OnInit {
  private currentModule: Module;

  private source: Array<Module>;

  private modulesSettings = {
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
        type: 'string',
      },
      acronym: {
        title: 'Acronym',
        type: 'string',
      },
      customAction: {
        title: 'View the module',
        type: 'custom',
        renderComponent: CustomModuleButtonComponent,
        addable: false,
        editable: false,
        filter: false,
        sortable: false,
      },
    }
  };

  constructor(private moduleService: ModuleService, private router: Router, private dialogService: NbDialogService) {
  }

  ngOnInit() {
    this.moduleService.getModules().subscribe(res => {
      this.source = res;
    });
  }

  public goToModule(moduleId) {
    this.router.navigate(['/admin/module/' + moduleId]);
  }

  public onDeleteConfirm(event): void {
    const closeOnBackdropClick = false;
    this.dialogService.open(ConfirmationModalComponent, {
      closeOnBackdropClick, context: {
        confirmText: 'Do you really want to delete the student ' + event.data.first_name + ' ' + event.data.last_name + '?',
      }
    }).onClose.subscribe(res => {
      if (res) {
        const moduleId = event.data.id;
        this.moduleService.deleteModule(moduleId).subscribe(res => {
          this.source = this.source.filter((obj) => {
            return obj.id !== moduleId;
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
    this.moduleService.editModule(event.newData).subscribe(res => {
      console.log('updated');
    });
    event.confirm.resolve();
  }

  public onCreateConfirm(event) {
    this.moduleService.createModule(event.newData).subscribe(res => {
      console.log('created');
      this.refreshData();
    });
    event.confirm.resolve();
    // event.confirm.reject();
  }

  public refreshData() {
    this.moduleService.getModules().subscribe(res => {
      this.source = res;
    });
  }

}
