import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdministrationStudentsComponent} from './administration-students/administration-students.component';
import {AdministrationModulesComponent} from './administration-modules/administration-modules.component';
import {AdministrationModuleComponent} from './administration-modules/administration-module/administration-module.component';
import {AdministrationStudentComponent} from './administration-students/administration-student/administration-student.component';
import {AuthGuard} from '../../shared/guards/auth.guard';


const routes: Routes = [
  {path: 'admin/students', component: AdministrationStudentsComponent, canActivate: [AuthGuard]},
  {path: 'admin/modules', component: AdministrationModulesComponent, canActivate: [AuthGuard]},
  {path: 'admin/module/:id', component: AdministrationModuleComponent, canActivate: [AuthGuard]},
  {path: 'admin/student/:id', component: AdministrationStudentComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
}
