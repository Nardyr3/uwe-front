import {Component, OnInit} from '@angular/core';
import {Module} from '../../../shared/models/module';

@Component({
  selector: 'app-administration-module',
  templateUrl: './administration-module.component.html',
  styleUrls: ['./administration-module.component.scss']
})
export class AdministrationModuleComponent implements OnInit {
  private currentModule: Module;

  private source: Array<Module>;
  items = [
    {title: 'Profile'},
    {title: 'Logout'},
  ];

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
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Coefficient',
        type: 'number',
      },
      acronym: {
        title: 'Module',
        type: 'string',
      },
      email: {
        title: 'PassDate',
        type: 'date',
      },
    }
  };

    private studentsSettings = {
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
        id: {
          title: 'ID',
          type: 'number',
        },
        firstName: {
          title: 'Firstname',
          type: 'string',
        },
        lastName: {
          title: 'Lastname',
          type: 'string',
        },
        email: {
          title: 'Email',
          type: 'address',
        },
      }
  };

  constructor() {
  }

  ngOnInit() {
    this.currentModule = {acronym: 'test'};
  }

}
