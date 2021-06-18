import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
dataLoaded : boolean = false;

  constructor(private userService:UserService, private localStorageService:LocalStorageService, private router:Router) { }

  ngOnInit(): void {
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

        this.router.navigate(['']).then((c) => {});

        return false;
      });
    });
  }

}
