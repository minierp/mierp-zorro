import { Component, Pipe, PipeTransform } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from '../core/data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.html',
  styleUrls: ['./app.menu.css']
})

export class AppMenu {
  FactName = '东莞市明志电脑服务有限公司';
  Username = '管理员';
  menuleft:any=[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private data: DataService) {
    this.LoadMenu();
   }
  async LoadMenu() {
    let data = await this.data.GetData('menu/left',{});
    this.menuleft=data['items'];
    let stat = data['stat'];

  }
}
