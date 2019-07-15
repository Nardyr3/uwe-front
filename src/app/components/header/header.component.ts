import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {NbLayoutScrollService, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private sidebarState: true;

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService) {
  }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'main-menu');
    console.log("test");
    return false;
  }
}
