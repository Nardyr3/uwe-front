import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationStudentComponent} from './administration-students/administration-student/administration-student.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbAlertModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbSidebarModule
} from '@nebular/theme';
import { AdministrationModulesComponent } from './administration-modules/administration-modules.component';
import { AdministrationStudentsComponent } from './administration-students/administration-students.component';
import { AdministrationModuleComponent } from './administration-modules/administration-module/administration-module.component';
import {CustomModuleButtonComponent} from './administration-modules/custom-module-button.component';
import {CustomDatePickerComponent} from './administration-modules/custom-datepicker.component';
import {FormsModule} from '@angular/forms';
import {CustomStudentButtonComponent} from './administration-students/custom-student-button.component';
import { ButtonRenderComponent } from './administration-students/button-render/button-render.component';
import { AddGradeDialogComponent } from './administration-students/add-grade-dialog/add-grade-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AdministrationStudentsComponent,
    AdministrationModulesComponent,
    AdministrationStudentComponent,
    ButtonRenderComponent,
    AddGradeDialogComponent,
    AdministrationModuleComponent,
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
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbPopoverModule,
    NbAlertModule,
    FormsModule,
    NbAccordionModule,
    NbDatepickerModule,
  ],
  entryComponents: [ButtonRenderComponent, AddGradeDialogComponent ,
    CustomModuleButtonComponent,
    CustomDatePickerComponent,
    CustomStudentButtonComponent
  ]
})
export class AdministrationModule { }
