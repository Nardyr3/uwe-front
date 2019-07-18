import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import {NbThemeService, NbColorHelper} from '@nebular/theme';

@Component({
  selector: 'chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy, OnInit {
  @ViewChild('selector') private someName;
  data: any;
  options: any;
  themeSubscription: any;

  private _labels: Array<any>;
  private _dataset: Array<any>;

  @Input()
  set labels(val: any) {
    this._labels = val;
    this.refreshData();
  }
  @Input()
  set dataset(val: any) {
    this._dataset = val;
    this.refreshData();
  }


  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      this.options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: colors.fg,
              },
              ticks: {
                fontColor: colors.fg,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: colors.fg,
              },
              ticks: {
                fontColor: colors.fg,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: colors.fg,
          },
        },
      };
    });
  }

  ngOnInit(): void {
    this.refreshData();
  }

  public refreshData() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      console.log(this._dataset);
      const colors: any = config.variables;
      this.data = {
        labels: this._labels,
        datasets: [{
          data: this._dataset,
          label: 'Marks',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
