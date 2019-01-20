import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

import {AuthService} from './core/auth.service';
import {UserService} from './core/user.service';
import {AuthGuardService} from './core/auth-guard.service';
import { DataService } from './core/data.service';
import {AppComponent} from './jinghuo/app.component';
import {AppMenu} from './menu/app.menu';
import {AppRoot} from './app.root';
import {AppLogin} from './home/login';
import {routing} from './app.routes';
//import {MaterialModule } from "./material.module";
//import {FlexLayoutModule} from '@angular/flex-layout';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations:
      [AppComponent, AppLogin, AppMenu, AppRoot],
  imports:
      [BrowserModule,BrowserAnimationsModule, ReactiveFormsModule,FormsModule, HttpClientModule, routing, NgZorroAntdModule.forRoot()],
  providers: [
    {provide: 'auth', useClass: AuthService}, AuthGuardService,DataService,
    {provide: 'user', useClass: UserService},
    {provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
