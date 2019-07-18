import {Component, Input, OnInit, Output} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-component-button',
  template: `
    <button nbButton fullWidth status="info" (click)="onClick()">View component</button>`,
})
export class CustomComponentButtonComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value;

  constructor(private router: Router) {
  }

  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value;
  }

  onClick() {
    this.router.navigate(['/admin/component/' + this.rowData.id]);
  }
}
