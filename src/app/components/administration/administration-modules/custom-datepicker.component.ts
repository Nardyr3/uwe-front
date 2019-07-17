import {Component, AfterViewInit} from '@angular/core';

import {Cell, DefaultEditor, Editor} from 'ng2-smart-table';

@Component({
  template: `<input 
                    class='form-control' [(ngModel)]="cell.newValue" [name]='cell.getId()'
                    [disabled]='!cell.isEditable()' (click)='onClick.emit($event)'
                    (keydown.enter)='onEdited.emit($event)' (keydown.esc)='onStopEditing.emit()' [nbDatepicker]="datepicker">
  <nb-datepicker #datepicker></nb-datepicker>`,
})
export class CustomDatePickerComponent extends DefaultEditor implements AfterViewInit {

  constructor() {
    super();
  }

  ngAfterViewInit() {

  }
}
