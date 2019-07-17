import {Component, OnInit} from '@angular/core';
import {Module} from '../../../shared/models/module';
import {ModuleService} from '../../../shared/services/rest/module.service';
import {Router} from '@angular/router';
import {CustomModuleButtonComponent} from './custom-module-button.component';

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
        title: 'Voir le module',
        type: 'custom',
        renderComponent: CustomModuleButtonComponent,
        addable : false,
        editable : false,
        filter: false,
        sortable: false,
      },
    }
  };

  constructor(private moduleService: ModuleService, private router: Router) {
  }

  ngOnInit() {
    this.moduleService.getModules().subscribe(res => {
      console.log(res);
      this.source = res;
    });
  }

  public goToModule(moduleId) {
    console.log('gotoModule');
    this.router.navigate(['/admin/module/' + moduleId]);
  }

  public onDeleteConfirm(event): void {
    const moduleId = event.data.id;
    console.log(moduleId);
    this.moduleService.deleteModule(moduleId).subscribe(res => {
      console.log('deleted');
      this.source = this.source.filter(function (obj) {
        return obj.id !== moduleId;
      });
    });
  }

  public onSaveConfirm(event) {
    console.log(event);
    this.moduleService.editModule(event.newData).subscribe(res => {
      console.log(res);
      console.log('updated');
    });
    event.confirm.resolve();
  }

  public onCreateConfirm(event) {
    console.log(event);
    this.moduleService.createModule(event.newData).subscribe(res => {
      console.log(res);
      console.log('created');
    });
    event.confirm.resolve();
    // event.confirm.reject();
  }

}
