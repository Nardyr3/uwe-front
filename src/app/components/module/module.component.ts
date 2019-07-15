import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mark} from '../../shared/models/mark';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  private moduleId: string;

  private marks: Array<Mark>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.moduleId = params.params.id;
      console.log(this.moduleId);
    });

    this.marks = [
      {id: 5}
    ];
  }

}
