import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdministrationStudentComponent} from './components/administration/administration-student/administration-student.component';

const routes: Routes = [
  { path: 'admin', component: AdministrationStudentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
