import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationModule} from './administration.module';
import {AdministrationStudentComponent} from './administration-student/administration-student.component';
import {AdministrationModuleComponent} from './administration-module/administration-module.component';


const routes: Routes = [
  { path: 'admin/students', component: AdministrationStudentComponent },
  { path: 'admin/modules', component: AdministrationModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
