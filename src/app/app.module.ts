import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import 'hammerjs';

import {AuthService} from './core/auth.service';
//import {UserService} from './core/user.service';
import {AuthGuardService} from './core/auth-guard.service';
import {DataService } from './core/data.service';
import {AuthInterceptor } from './core/AuthInterceptor.service';
import {MainMenu} from './menu/main.menu';
import {AppMenu} from './menu/app.menu';
import {AppRoot} from './app.root';
import {AppLogin} from './home/login';
import {routing} from './app.routes';
import {JinghuoComponent} from './jinghuo/jinghuo.component';
//import {MaterialModule } from "./material.module";
//import {FlexLayoutModule} from '@angular/flex-layout';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations:
      [MainMenu, AppLogin, AppMenu, AppRoot,JinghuoComponent],
  imports:
      [BrowserModule,BrowserAnimationsModule, ReactiveFormsModule,FormsModule, HttpClientModule, routing, NgZorroAntdModule.forRoot()],
  providers: [
    {provide: 'auth', useClass: AuthService}, AuthGuardService,DataService,
    //{provide: 'user', useClass: UserService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
