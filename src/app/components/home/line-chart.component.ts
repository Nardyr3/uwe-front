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
      console.log(colors);
      this.options = {
        backgroundColor: colors.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['Line 1', 'Line 2', 'Line 3'],
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
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
          },
          {
            name: 'Line 2',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
          },
          {
            name: 'Line 3',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
