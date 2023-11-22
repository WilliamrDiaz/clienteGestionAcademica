import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
<<<<<<< HEAD
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'person', class: '' },
    { path: '/table-list', title: 'Evaluación',  icon:'content_paste', class: '' },
    { path: '/list-docentes', title: 'Docente',  icon:'person', class: '' },
    { path: '/listar-periodo', title: 'Periodo', icon: 'person', class: ''},
    { path: '/autoevaluacion', title: 'Autoevaluacion', icon: 'content_paste', class: ''},
    { path: '/listar-labor', title: 'Labor docente', icon: 'content_paste', class: ''}
=======
    { path: '/dashboard',               title: 'Dashboard',     icon: 'dashboard',    class: '' },
    { path: '/user-profile',            title: 'Perfil',        icon:'person',        class: '' },
    { path: '/table-list',              title: 'Evaluación',    icon:'content_paste', class: '' },
    { path: '/Periodo/listar-periodo',  title: 'Periodo',       icon:'settings',      class: '' },
    { path: '/docente',                 title: 'Docente',       icon:'group',         class: '' },
    { path: '/l_docente/listar-labor',  title: 'Labor Docente', icon:'list_alt',      class: '' },
    //{ path: '/autoevaluacion',          title: 'Autoevaluación',icon:'quiz',          class: '' },
>>>>>>> c35af17f76fb6c14301575a4862243844c9cb5fe
    
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
