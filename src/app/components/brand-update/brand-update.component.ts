import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand/brand';
import { AuthService } from 'src/app/service/auth.service';
import { BrandService } from 'src/app/service/Brand/brand.service';


@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brand:Brand
  currentBrand:Brand = {
    brandId:0,
    brandName:""
  }
 brandUpdateForm:FormGroup
 
 @Input() brandForUpdate:Brand
   constructor(private brandService:BrandService,
     private toastrService:ToastrService,
     private activatedRoute:ActivatedRoute,
     private formBuilder:FormBuilder,
     private authService:AuthService) { }
  
 
   ngOnInit(): void {
         this.createBrandUpdateForm();
       
   }
 
 createBrandUpdateForm(){
   this.brandUpdateForm=this.formBuilder.group({
 
     brandName:[this.brandForUpdate?this.brandForUpdate.brandName:"",Validators.required]
   })
 }
 ngDoCheck(){
   if(this.brandForUpdate?.brandName !== this.currentBrand?.brandName){
     this.currentBrand.brandName = this.brandForUpdate?.brandName
     this.brandUpdateForm.patchValue({
      brandName:this.currentBrand?.brandName
     })
   }
 }
 updateBrand(){
   if(this.brandUpdateForm.valid){
     let colorModel = Object.assign({},this.brandUpdateForm.value)
     colorModel.branId=this.brandForUpdate.brandId
     
     this.brandService.Update(colorModel).subscribe((response)=>{
       this.toastrService.success(response.message,"Başarılı")
     },responseError =>{
       if(responseError.error.ValidationErrors.length>0){
         for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
           this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error")
           
         }
       }
     })
   }
   else {
     this.toastrService.error("Form bilgisi hatalı","Tekrar kontrol ediniz")
   }
 } 
 checkToLogin(){
   if(this.authService.isAuthencation()){
     return  true;
   }else{
     return false;
   }
 }

}
