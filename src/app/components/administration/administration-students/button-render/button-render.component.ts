import {Component, Input, OnInit} from '@angular/core';
import {AddGradeDialogComponent} from '../add-grade-dialog/add-grade-dialog.component';
import {NbDialogService} from '@nebular/theme';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'app-button-render',
  templateUrl: './button-render.component.html',
  styleUrls: ['./button-render.component.scss']
})
export class ButtonRenderComponent implements OnInit, ViewCell {
  public renderValue;
  @Input() value;
  @Input() rowData: any;
  constructor(private dialogService: NbDialogService) {  }

  ngOnInit() {
    this.renderValue = this.value;
    console.log(this.rowData);
  }

  example() {
    this.dialogService.open(AddGradeDialogComponent, {
      closeOnBackdropClick: false,
      context: {
        title: this.rowData,
      },
    });
  }

}
