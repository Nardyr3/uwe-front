import {Component, OnInit} from '@angular/core';
import {SidebarMenuItems} from '../../../shared/const/menus';
import {AppstateService} from '../../../shared/services/appstate.service';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-administration-sidebar',
  templateUrl: './administration-sidebar.component.html',
  styleUrls: ['./administration-sidebar.component.scss']
})
export class AdministrationSidebarComponent implements OnInit {
  menu: NbMenuItem[];

  constructor(private appState: AppstateService) {
  }

  ngOnInit() {
    console.log(this.appState);
    this.appState.userObservable.subscribe(val => {
      if (val && val.roles.includes('ROLE_SUPER_ADMIN')) {
        this.menu = [{
          title: 'Administration',
          group: true,
        },
          {
            title: 'Students',
            icon: 'people-outline',
            link: '/admin/students'
          },
          {
            title: 'Modules',
            icon: 'layout-outline',
            link: '/admin/modules'
          }];
      } else {
        this.appState.studentModuleObservable.subscribe(val => {
          let children = [];
          this.appState.studentModules.forEach((module) => {
            children.push({
              title: module.name,
              link: '/module/' + module.id,
            });
          });

          this.menu = [
            {
              title: 'Home',
              icon: 'home',
              link: '/'
            },
            {
              title: 'Modules',
              icon: 'home',
              children: children
            },
            {
              title: 'Calendar',
              icon: 'calendar',
              link: '/calendar'
            },
          ];
        });
      }
    });

    console.log(this.menu);


  }

}
