import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationModule} from './administration.module';
import {AdministrationStudentsComponent} from './administration-students/administration-students.component';
import {AdministrationModulesComponent} from './administration-modules/administration-modules.component';
import {AdministrationModuleComponent} from './administration-modules/administration-module/administration-module.component';


const routes: Routes = [
  { path: 'admin/students', component: AdministrationStudentsComponent },
  { path: 'admin/modules', component: AdministrationModulesComponent },
  { path: 'admin/module/:id', component: AdministrationModuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
