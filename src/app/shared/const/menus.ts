import {NbMenuItem} from '@nebular/theme';

export const SidebarMenuItems: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Modules',
    icon: 'home',
    children: [
      {
        title: 'Web Programming (WP)',
        link: '/module/wp',
      },
      {
        title: 'Web Design (WD)',
        link: '/module/wd',
      },
      {
        title: 'Content Management System (CMS)',
        link: '/module/cms',
      },
      {
        title: 'Legal Ethical Social and Professional Issues (LESPI)',
        link: '/module/lespi',
      },
    ]
  },
  {
    title: 'Administration',
    group: true,
  },
  {
    title: 'Students',
    icon: 'layout-outline',
    link: '/admin/students'
  },
  {
    title: 'Modules',
    icon: 'layout-outline',
    link: '/admin/modules'
  },
];
