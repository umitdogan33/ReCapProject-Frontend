import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {


  // email = this.localStorageService.Get('email');  isLoggedIn=false;
  user:User=new User();
  dataLoaded:boolean = false;
  
  constructor(private authService:AuthService,private localStorageService:LocalStorageService,private userService:UserService,private  toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {

    this.checkToLogin();
    this.checkToEmail();

   this.getEmail();
   this.adminControl();
  }

  adminControl() {
    this.userService.getByEmail(this.localStorageService.Get("email")).subscribe((response) => {
      this.userService.getClaim(response.data.id).subscribe((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (
            response.data[i].name == 'admin'
          ) {
            this.dataLoaded = true;
            return true;
          }
        }

        return false;
      });
    });
  }

  checkToLogin(){
    if(this.authService.isAuthencation()){
      return true;
    }else{
      return false;
    }
  }

  checkToEmail(){
    if(this.localStorageService.Get('email')){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
   this.localStorageService.Clean()
    this.toastrService.success("Başarıyla Çıkış Yapıldı");
    this.router.navigate(["/"])
  }

  getEmail(){
    console.log("email: ",this.localStorageService.Get("email"))
    if(this.localStorageService.Get("email")){
       console.log("çalıştı")
      this.userService.getByEmail(this.localStorageService.Get("email").toString()).subscribe(response=>{
        this.user = response.data;
      })
    }
  }
}
