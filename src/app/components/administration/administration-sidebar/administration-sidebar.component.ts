import { Component, OnInit } from '@angular/core';
import {SidebarMenuItems} from '../../../shared/const/menus';
import {AppstateService} from '../../../shared/services/appstate.service';

@Component({
  selector: 'app-administration-sidebar',
  templateUrl: './administration-sidebar.component.html',
  styleUrls: ['./administration-sidebar.component.scss']
})
export class AdministrationSidebarComponent implements OnInit {
  menu = SidebarMenuItems;

  constructor(private appState: AppstateService) { }

  ngOnInit() {
    console.log(this.appState.isAuth());
  }

}
