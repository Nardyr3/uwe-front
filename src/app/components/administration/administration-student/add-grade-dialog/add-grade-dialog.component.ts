import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-grade-dialog',
  templateUrl: './add-grade-dialog.component.html',
  styleUrls: ['./add-grade-dialog.component.scss']
})
export class AddGradeDialogComponent implements OnInit {
  @Input() title: string;
  selectedItemFormControl = new FormControl();
  ngOnInit() {
  }
  constructor(protected ref: NbDialogRef<AddGradeDialogComponent>) {
  }

  dismiss() {
    this.ref.close();
  }

  validate() {

  }
}
