import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationStudentComponent} from './administration-student/administration-student.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbButtonModule, NbCardModule, NbContextMenuModule, NbMenuModule} from '@nebular/theme';
import { AdministrationModuleComponent } from './administration-module/administration-module.component';


@NgModule({
  declarations: [
    AdministrationStudentComponent,
    AdministrationModuleComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbMenuModule,
    NbContextMenuModule,
    NbButtonModule
  ]
})
export class AdministrationModule { }
