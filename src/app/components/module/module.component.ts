import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mark} from '../../shared/models/mark';
import {Module} from '../../shared/models/module';
import {ModuleService} from '../../shared/services/rest/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  private moduleId: string;

  private module: Module;

  private marks: Array<Mark>;

  constructor(private route: ActivatedRoute, private moduleService: ModuleService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.moduleId = this.route.snapshot.paramMap.get('id');

      this.moduleService.getModuleById(Number(this.moduleId)).subscribe(resolve => {
        console.log('ok');
        this.module = resolve;
      });
    });
    console.log(this.moduleId);

  }

}
