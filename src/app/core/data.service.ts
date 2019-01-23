import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthGuardService} from '../core/auth-guard.service';

@Injectable()
export class DataService {
  public data_url: string;
  public auth_url: string;
  constructor(private http: HttpClient, private auth:AuthGuardService) {
    let lhost = this.GetApiPath();
  }
  GetApiPath(){
    let lhostparr = location.host.split(":"); // 本地开发 localhost GitHub api.minierp.cn
    let lhost = lhostparr[0];
    if(lhost.indexOf('github')>=0){
      lhost='api.minierp.cn';
      this.data_url = 'https://' + lhost + '/common/data.php/';
      this.auth_url = 'https://' + lhost + '/common/auth.php/';
    }else{
      this.data_url = 'http://' + lhost + '/minierp/common/data.php/';
      this.auth_url = 'http://' + lhost + '/minierp/common/auth.php/';
    }
    console.log(lhost);
    return lhost;
  }

  async GetData(path:string,par:any) { 
    let userdata = await this.GetUrl(path,par);
    let stat = userdata['stat'];
    //console.log(userdata);
    return userdata;
  }
  async GetUrl(dtp:string,opt:any) {
    let token =this.auth.GetToken('');
    let par: string = '';
    let lhostparr = location.host.split(":");
    let lhost = lhostparr[0];
    for (var key in opt)
    {
        par += '&' + key + '=' + opt[key];
    }
    let DataRoot = this.data_url + dtp;
    let loadurl = DataRoot + '/?' + par+ '&TOKEN=' + token;;

    let data=await this.http.get(loadurl).toPromise();
    let stat = data['stat'];
    if (stat == 'OK') { //正确登录
      return data;
    }
    return data;
  }
}
