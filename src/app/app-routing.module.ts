import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ModuleComponent} from './components/module/module.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {CalendarComponent} from './components/calendar/calendar.component';
import {StudentInfoComponent} from './components/student-info/student-info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'module/:id', component: ModuleComponent, canActivate: [AuthGuard]},
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
  { path: 'student', component: StudentInfoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
