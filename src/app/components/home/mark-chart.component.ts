import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'mark-chart',
  template: '<div echarts [options]="options" class="demo-chart"></div>',
})
export class MarkChartComponent implements OnInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngOnInit() {
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
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Techology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 },
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: 'Budget vs Spending',
            type: 'radar',
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Allocated Budget',
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Actual Spending',
              },
            ],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
