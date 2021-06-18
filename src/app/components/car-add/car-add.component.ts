import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand/brand';
import { Color } from 'src/app/models/Color/color';
import { BrandService } from 'src/app/service/Brand/brand.service';
import { CarService } from 'src/app/service/Car/car.service';
import { ColorService } from 'src/app/service/Color/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddGroup:FormGroup;
  brands:Brand[]=[]
  colors:Color[]=[]


  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,
    private carService:CarService,private brandService:BrandService,
    private colorService:ColorService,
    private router:Router) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColor();
  }


  createCarAddForm(){
    this.carAddGroup=this.formBuilder.group({
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    });
}


add(){
  if(this.carAddGroup.valid){
  let productModel = Object.assign({},this.carAddGroup.value)
  this.carService.add(productModel).subscribe(response=> {
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

getBrands(){
  this.brandService.GetBrands().subscribe(response => {
    this.brands = response.data
  })
}

getColor(){
  this.colorService.GetColor().subscribe(response => {
    this.colors = response.data
  })
}
backToList(){
  this.router.navigate(["cars"])
}
}