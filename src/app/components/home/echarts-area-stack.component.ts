import {AfterViewInit, Component, Input, OnChanges, OnDestroy} from '@angular/core';
import {NbThemeService} from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-area-stack',
  template: `
    <div echarts [options]="options" class="echart" (chartInit)="onChartInit($event)"></div>
  `,
})
export class EchartsAreaStackComponent implements AfterViewInit, OnDestroy, OnChanges {
  options: any = {};
  themeSubscription: any;
  public echartsInstance;

  @Input() labels;

  @Input() dataset;

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  ngOnChanges(): void {
    console.log('NG ON CHANGE');
    if (this.options) {
      console.log(this.dataset[0]);
      this.updateChartOptions(this.dataset);
    }


  }

  constructor(private theme: NbThemeService) {
  }

  updateChartOptions(chartData: { value: [string, number] }[]) {
    setTimeout(() => {
      console.log(this.dataset);
      if (this.echartsInstance !== undefined) {
        this.echartsInstance.setOption({
          series: [{
            data: chartData,
          }],
        });
      }
    }, 500);


  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: colors.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: colors.fg,
            },
          },
        },
        legend: {
          data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
          textStyle: {
            color: colors.fg,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.labels,
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
            type: 'value',
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
        series: [
          {
            name: 'Marks',
            type: 'line',
            stack: 'Marks',
            areaStyle: {normal: {opacity: colors.fg}},
            data: this.dataset,
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
