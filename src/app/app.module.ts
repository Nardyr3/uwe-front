import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbSelectModule,
  NbSearchModule,
  NbUserModule,
  NbActionsModule,
  NbMenuModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbSidebarService,
  NbTabsetModule,
  NbListComponent,
  NbListModule,
  NbDialogModule,
  NbDialogService,
  NbDatepickerModule,
  NbAccordionModule,
  NbSpinnerModule
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdministrationModule} from './components/administration/administration.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdministrationSidebarComponent} from './components/administration/administration-sidebar/administration-sidebar.component';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import { HomeComponent } from './components/home/home.component';
import {MarkChartComponent} from './components/home/mark-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {LineChartComponent} from './components/home/line-chart.component';
import { ModuleComponent } from './components/module/module.component';
import { ConfirmationModalComponent } from './components/modals/confirmation-modal/confirmation-modal.component';
import {ChartjsLineComponent} from './components/home/line-chart-chartjs.component';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdministrationSidebarComponent,
    HomeComponent,
    MarkChartComponent,
    LineChartComponent,
    ChartjsLineComponent,
    ModuleComponent,
    ConfirmationModalComponent
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    AdministrationModule,
    NbIconModule,
    NbSelectModule,
    NbContextMenuModule,
    NbSearchModule,
    NbUserModule,
    NbActionsModule,
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NgxEchartsModule,
    NbTabsetModule,
    NbListModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbAccordionModule,
    NbSpinnerModule,
    ChartModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
