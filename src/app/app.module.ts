import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministrationStudentComponent } from './components/administration/administration-student/administration-student.component';
import {HttpClientModule} from '@angular/common/http';
import {NbThemeModule, NbLayoutModule, NbCardHeaderComponent, NbCardBodyComponent, NbCardComponent} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2SmartTableComponent} from 'ng2-smart-table/ng2-smart-table.component';
import {Ng2SmartTableTheadComponent} from 'ng2-smart-table/components/thead/thead.component';
import {Ng2SmartTableTbodyComponent} from 'ng2-smart-table/components/tbody/tbody.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationStudentComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
