import {Component, Pipe, PipeTransform} from '@angular/core';
//import {Http} from '@angular/http';
//import {AuthGuardService} from '../core/auth-guard.service';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  loaded: boolean = true;
  opt: any = {CHK: 99, QIAN: 0, STA: 0};
  model: any;
  delts: any;  //= [{'SHMID': '001'}, {'SHMID': '002'}];
  total_count: number = 0;

  constructor(private data: DataService) { 
  //  constructor() { 
   this.LoadOrder(); 
  }
  setQIAN() {
    if (this.opt.QIAN === 0) {
      this.opt.QIAN = 1;
    } else {
      this.opt.QIAN = 0;
    }
    this.LoadOrder();
  }
  setCHKYN() {
    if (this.opt.CHK === 0) {
      this.opt.CHK = 1;
    } else {
      this.opt.CHK = 0;
    }
    this.LoadOrder();
  }
  async LoadOrder() {
    let data = await this.data.GetData('jinhuo/list',this.opt);
    this.delts=data['items'];
    let stat = data['stat'];
     //console.log('LoadOrder');
    this.loaded = false;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
