import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginDisableGuard implements CanActivate {
 constructor(private localStorageService:LocalStorageService,private router:Router,private toastrService:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.localStorageService.GetToken()){
      this.router.navigate([""])
      this.toastrService.error("zaten giriş yapmış durumdasınız");
      return false;
      
    }
    else{
      return true;
    }
  }
  
}
