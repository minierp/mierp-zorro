import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

//import 'rxjs/add/operator/toPromise';
import { Auth } from "../domain/entities";
@Injectable()
export class AuthService {
  constructor(@Inject('user') private userService) { }
  async Login(uid, upas, fid) {
    let logyn=false;
    let data = await this.userService.GetUser(uid, upas, fid);
    //console.log(data);
    //console.log('auth.Login');
    let stat = data['stat'];
    if (stat == 'OK') {
      logyn=true;
    }
    return logyn;
  }
}
