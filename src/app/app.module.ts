import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NbThemeModule, NbLayoutModule, NbCardModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {AdministrationModule} from './components/administration/administration.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    AdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
