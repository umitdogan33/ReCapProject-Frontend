import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      FirstName:["",Validators.required],
      LastName:["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required]
    })

}

Register(){
  if(this.registerForm.valid){
    console.log(this.registerForm.value);
    let registerModel = Object.assign({},this.registerForm.value)
  
    this.authService.Register(registerModel).subscribe(response=>{
      console.log(response)
      this.toastrService.info(response.message)
    },responseError=>{
      console.log(responseError)
      this.toastrService.error(responseError.error.message)

    })



}
}
}