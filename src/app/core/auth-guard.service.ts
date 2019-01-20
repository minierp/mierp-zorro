import {Injectable, Inject} from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuardService {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    let userstr = localStorage.getItem('user');
    //console.log(userstr);
    if(String(userstr) !== "null"){
      let userobj = JSON.parse(userstr);
      let token = userobj.token;
      return true;
    }
    localStorage.setItem('redirectUre', url);
    this.router.navigate(['/login']);
    return false;
  }
  GetToken(url: string): string {
    let userstr = localStorage.getItem('user');
    let token='';
    //console.log(userstr);
    // return "";
    if(String(userstr) !== "null"){
      let userobj = JSON.parse(userstr);
      //console.log(userobj);
      token = userobj.token;
      //console.log(token);
    }
    return token;
  }
}
