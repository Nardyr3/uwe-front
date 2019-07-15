import { Component, OnInit } from '@angular/core';
import {SidebarMenuItems} from '../../../shared/const/menus';

@Component({
  selector: 'app-administration-sidebar',
  templateUrl: './administration-sidebar.component.html',
  styleUrls: ['./administration-sidebar.component.scss']
})
export class AdministrationSidebarComponent implements OnInit {
  menu = SidebarMenuItems;

  constructor() { }

  ngOnInit() {
  }

}
