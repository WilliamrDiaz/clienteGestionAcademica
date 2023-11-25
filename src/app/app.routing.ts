import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './views/login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes =[
  {  
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },{
    path: 'login',
    component: LoginComponent,
    
  },{
    path:'inicio',
    component: InicioComponent,
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => 
        import('./layouts/admin-layout/admin-layout.module')
          .then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
