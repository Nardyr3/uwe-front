import {Component, Input, OnInit, Output} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-module-button',
  template: `
    <button nbButton fullWidth status="info" (click)="onClick()">Voir le module</button>`,
})
export class CustomModuleButtonComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value;

  constructor(private router: Router) {
  }

  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value;
  }

  onClick() {
    console.log(this.rowData);
    this.router.navigate(['/admin/module/' + this.rowData.id]);
  }
}
