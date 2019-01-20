import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthGuardService} from '../core/auth-guard.service';

@Injectable()
export class DataService {
  private api_url: string;
  constructor(private http: HttpClient, private auth:AuthGuardService) {
    let lhostparr = location.host.split(":");
    let lhost = lhostparr[0];
    this.api_url = 'http://' + lhost + '/minierp/common/act.php/';
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
    let DataRoot = 'http://' + lhost + '/minierp/common/data.php/' + dtp;
    let loadurl = DataRoot + '/?' + par+ '&TOKEN=' + token;;

    let data=await this.http.get(loadurl).toPromise();
    let stat = data['stat'];
    if (stat == 'OK') { //正确登录
      return data;
    }
    return data;
  }
}
