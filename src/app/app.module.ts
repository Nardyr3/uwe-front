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
  NbSidebarService, NbDialogModule
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdministrationModule} from './components/administration/administration.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AdministrationSidebarComponent} from './components/administration/administration-sidebar/administration-sidebar.component';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdministrationSidebarComponent
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
    NbSearchModule,
    NbUserModule,
    NbActionsModule,
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbDialogModule.forRoot(),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
