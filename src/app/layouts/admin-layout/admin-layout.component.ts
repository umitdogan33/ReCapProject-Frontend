import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
dataLoaded : boolean = false;

  constructor(private userService:UserService, private localStorageService:LocalStorageService, private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.adminControl();
  }

  adminControl() {
          if (this.authService.getCurrentRoles()=="admin") 
          {
            this.dataLoaded = true;
            return true;
          }
          else{
          this.router.navigate(["/cars"]).then((c) => {});

          return false;}
          
          
          
        }

       
}
     
