import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    status: number;
}
export const ROUTES: RouteInfo[] = [
  
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', status: 0 },
    { path: '/listar-periodo', title: 'Periodo', icon: 'date_range', class: '', status: 0},
    { path: '/list-docentes', title: 'Docente',  icon:'person', class: '', status: 0 },
    { path: '/listar-labor', title: 'Labor docente', icon: 'content_paste', class: '', status: 0},
    { path: '/table-list', title: 'Autoevaluación',  icon:'content_paste', class: '', status: 0 },
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
    this.checkUserRol();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
  };

  checkUserRol(){
    let rol = localStorage.getItem('usu_rol')
    let token = localStorage.getItem('token')
    if(token && (rol === 'Coordinador' || rol === 'Decano')){
      for(let i = 0; i < this.menuItems.length; i++){
        this.menuItems[i].status = 1;
      }
      
    } else{
      this.menuItems[4].status = 1;
    }
  }
}
