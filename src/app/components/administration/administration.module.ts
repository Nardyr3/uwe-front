import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbCardHeaderComponent, NbCardModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

@NgModule({
  imports: [
    NbCardHeaderComponent,
    NbCardModule,
    NbTreeGridModule,
    NbEvaIconsModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations: [
  ],
})
export class AdministrationModule {

}
