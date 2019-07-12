import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    //this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }
}
