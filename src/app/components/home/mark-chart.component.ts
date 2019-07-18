import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {ComponentService} from '../../shared/services/rest/component.service';
import {ModuleService} from '../../shared/services/rest/module.service';
import {AppstateService} from '../../shared/services/appstate.service';
import {Module} from '../../shared/models/module';
import {StudentService} from '../../shared/services/rest/student.service';
import {Student} from '../../shared/models/student';

@Component({
    selector: 'mark-chart',
    template: '<div echarts [options]="options" class="demo-chart"></div>',
})
export class MarkChartComponent implements OnInit, OnDestroy {
    options: any = {};
    themeSubscription: any;
    userId: number;
    indicator: Array<any> = [];
    modules: Array<Module>;
    meanModule: [];
    meanStudent: Array<any> = [];

    constructor(private moduleService: ModuleService, private studentService: StudentService,
                private appService: AppstateService, private theme: NbThemeService) {
    }

    ngOnInit() {
        this.userId = this.appService.user.id;
        console.log(this.userId);
        this.studentService.getStudentById(this.userId).subscribe(res => {
            res.modules.forEach(module => {
                this.indicator.push({
                    name: module.name,
                    max: 100
                });
                this.moduleService.getMeanByModulesAndStudent(module.id, this.userId).subscribe(meanS => {
                        this.meanStudent.push(meanS.mean);
                        // this.modules.forEach(module => console.log(module.id));
                        this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
                            const colors: any = config.variables;
                            this.options = {
                                backgroundColor: colors.bg,
                                color: [colors.danger, colors.warning],
                                tooltip: {},
                                legend: {
                                    data: ['Student mean', 'Global mean'],
                                    textStyle: {
                                        color: colors.fg,
                                    },
                                },
                                radar: {
                                    name: {
                                        textStyle: {
                                            color: colors.fg,
                                        },
                                    },
                                    indicator: this.indicator,
                                    splitArea: {
                                        areaStyle: {
                                            color: 'transparent',
                                        },
                                    },
                                },
                                series: [
                                    {
                                        name: 'Global Mean vs Student Mean',
                                        type: 'radar',
                                        data: [
                                            {
                                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                                name: 'Global Mean',
                                            },
                                            {
                                                value: this.meanStudent,
                                                name: 'Student Mean',
                                            },
                                        ],
                                    },
                                ],
                            };
                        });
                    }
                );
            });
            console.log(this.indicator);
            console.log(this.meanStudent);
            this.moduleService.getMeanByModules().subscribe(mean => {
                console.log(mean);
            });
        });


    }

    ngOnDestroy(): void {
        this.themeSubscription.unsubscribe();
    }
}
