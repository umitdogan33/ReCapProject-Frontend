import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand/brand';
import { BrandService } from 'src/app/service/Brand/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  BrandAddGroup:FormGroup;


  constructor(private toastrService:ToastrService,private brandService:BrandService, private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createBrandAddForm()
  }

  createBrandAddForm(){
    this.BrandAddGroup=this.formBuilder.group({
      brandName:["",Validators.required]
    });
}

add(){
  if(this.BrandAddGroup.valid){
  let BrandModel = Object.assign({},this.BrandAddGroup.value)
  this.brandService.Add(BrandModel).subscribe(response=> {
    console.log(response)
    this.toastrService.success(response.message,"başarılı")
    this.router.navigate(["/cars"]).then(c=>window.location.reload())
  },responseError=>{
    console.log(responseError);
    
    if(responseError.error.Errors.length>0){
      console.log(responseError.error.Errors)
      for (let i = 0; i < responseError.error.Errors.length; i++) {

      this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata"
        )
      }
    }
  })    
  

  }

  else{
    this.toastrService.error("Formunuz eksik","dikkat");
  }
}

backToList(){
  this.router.navigate(["cars"])
}
}
