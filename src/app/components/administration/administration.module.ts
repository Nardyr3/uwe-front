import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationStudentComponent} from './administration-student/administration-student.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbMenuModule, NbSelectModule} from '@nebular/theme';
import { ButtonRenderComponent } from './administration-student/button-render/button-render.component';
import { AddGradeDialogComponent } from './administration-student/add-grade-dialog/add-grade-dialog.component';


@NgModule({
  declarations: [
    AdministrationStudentComponent,
    ButtonRenderComponent,
    AddGradeDialogComponent,
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
  ],
  entryComponents: [ButtonRenderComponent, AddGradeDialogComponent ]
})
export class AdministrationModule { }
