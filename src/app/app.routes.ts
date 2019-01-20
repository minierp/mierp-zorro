import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AppLogin} from './home/login';
import {AppMenu} from './menu/app.menu';
import {AuthGuardService} from './core/auth-guard.service';


export const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full'},
  {path: 'menu', canActivate: [AuthGuardService], component: AppMenu},
  {path: 'login', component: AppLogin}
  //{path: 'test', component: MynavComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{useHash:true});  //不加 {useHash:true} 在 dist 会出现404
