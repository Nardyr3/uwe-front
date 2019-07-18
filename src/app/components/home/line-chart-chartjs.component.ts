import {Component, OnDestroy} from '@angular/core';
import {NbThemeService, NbColorHelper} from '@nebular/theme';

@Component({
  selector: 'chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Marks',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }
        ],
      };

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

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
