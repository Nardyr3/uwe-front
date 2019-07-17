import {Component} from '@angular/core';
import {AppstateService} from './shared/services/appstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-uwe-front';

  constructor(private appState: AppstateService) {

  }
}
