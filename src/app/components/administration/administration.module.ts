import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationStudentComponent} from './administration-student/administration-student.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbCardModule, NbMenuModule} from '@nebular/theme';


@NgModule({
  declarations: [
    AdministrationStudentComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbMenuModule
  ]
})
export class AdministrationModule { }
