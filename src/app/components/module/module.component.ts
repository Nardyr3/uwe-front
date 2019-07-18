import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mark} from '../../shared/models/mark';
import {Module} from '../../shared/models/module';
import {ModuleService} from '../../shared/services/rest/module.service';
import {StudentService} from '../../shared/services/rest/student.service';
import {AppstateService} from '../../shared/services/appstate.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  private moduleId: number;

  private module: Module;

  private marks: Array<Mark> = [];

  private chartData: Array<any> = [];
  private chartLabel: Array<any> = [];

  private mean: number;

  constructor(private route: ActivatedRoute, private moduleService: ModuleService, private studentService: StudentService, private appState: AppstateService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.marks = [];
      this.chartLabel = [];
      this.chartData = [];
      this.moduleId = Number(this.route.snapshot.paramMap.get('id'));

      this.moduleService.getModuleById(this.moduleId).subscribe(resolve => {
        this.module = resolve;
      });

      const tempChartData = [];
      const tempChartLabel = [];
      this.studentService.getMarkByStudent(this.appState.user.id).subscribe(res => {
        res.forEach(mark => {
          if (Number(mark.component.module.id) === this.moduleId) {
            const comp = this.module.components.filter((item) => {
              return item.id === mark.component.id;
            });
            if (comp.length) {
              comp[0].studentMark = mark;
            }

            console.log(comp);

            this.marks.push(mark);
            tempChartData.push(mark.value);
            tempChartLabel.push(mark.value);
          }
        });

        let totalMark = 0;
        let totalCoef = 0;
        this.marks.forEach(mark => {
          totalMark += mark.value * mark.component.coefficient;
          totalCoef += mark.component.coefficient;
        });
        this.mean = totalMark / totalCoef;
      });
      this.chartData = tempChartData;
      this.chartLabel = tempChartLabel;
    });

  }


}
