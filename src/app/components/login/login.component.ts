import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,private localStorageService:LocalStorageService,private router:Router) { }

  ngOnInit(): void {
    this.ccreateLoginForm();
  }

  ccreateLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })

}

login(){
  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    let loginModel = Object.assign({},this.loginForm.value)
  
    this.authService.login(loginModel).subscribe(response=>{
      console.log(response)
      this.toastrService.info(response.message)
      this.localStorageService.Set("token",response.data.token)
      this.localStorageService.Set('email',this.loginForm.value.email); // burada kaydettik.
      this.router.navigate(["/cars"]).then(c=>window.location.reload())

    },responseError=>{
      console.log(responseError.error)
      this.toastrService.error(responseError.error)

    })
  }
}
}

