import { Injectable, Inject } from '@angular/core';
//import {Http, Headers, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../core/data.service';
import { Observable } from 'rxjs';
//import {toPromise} from 'rxjs';
import { User } from "../domain/entities";
@Injectable()
export class UserService {
  private api_url: string;
  constructor(private http: HttpClient,private data:DataService) {

  }
  async GetUser(uid, upas, fid) {
    const url = this.data.auth_url + 'login?uid=' + uid + '&upas=' + upas + '&fid=' + fid;
    //return this.http.get(url);
    let userdata = await this.http.get(url).toPromise();
    //console.log('user.getUser');
    //console.log(userdata);
    let stat = userdata['stat'];
    if (stat == 'OK') { //正确登录
      let userobj = userdata['user'];
      let userstr = JSON.stringify(userobj)
      localStorage.setItem('user', userstr);
    }
    return userdata;

  }
}
