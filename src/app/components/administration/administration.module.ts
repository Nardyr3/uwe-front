import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationStudentsComponent} from './administration-students/administration-students.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule, NbSidebarModule
} from '@nebular/theme';
import { AdministrationModulesComponent } from './administration-modules/administration-modules.component';
import { AdministrationStudentComponent } from './administration-students/administration-student/administration-student.component';
import { AdministrationModuleComponent } from './administration-modules/administration-module/administration-module.component';
import {CustomModuleButtonComponent} from './administration-modules/custom-module-button.component';
import {CustomDatePickerComponent} from './administration-modules/custom-datepicker.component';
import {FormsModule} from '@angular/forms';
import {CustomStudentButtonComponent} from './administration-students/custom-student-button.component';

@NgModule({
  declarations: [
    AdministrationStudentsComponent,
    AdministrationModulesComponent,
    AdministrationStudentComponent,
    AdministrationModuleComponent,
    CustomModuleButtonComponent,
    CustomDatePickerComponent,
    CustomStudentButtonComponent
  ],
  entryComponents: [
    CustomModuleButtonComponent,
    CustomDatePickerComponent,
    CustomStudentButtonComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbMenuModule,
    NbContextMenuModule,
    NbButtonModule,
    FormsModule,
    NbDatepickerModule,
    NbAccordionModule,
    NbSidebarModule
  ]
})
export class AdministrationModule { }
