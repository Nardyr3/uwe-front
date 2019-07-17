import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'line-chart',
  template: '<div echarts [options]="options" class="demo-chart"></div>',
})
export class LineChartComponent implements OnInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngOnInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      this.options = {
        backgroundColor: colors.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Mark'],
          textStyle: {
            color: colors.fg,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: colors.fg,
              },
            },
            axisLabel: {
              textStyle: {
                color: colors.fg,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: colors.fg,
              },
            },
            splitLine: {
              lineStyle: {
                color: colors.fg,
              },
            },
            axisLabel: {
              textStyle: {
                color: colors.fg,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'Line 1',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 500, 6669],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
