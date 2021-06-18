import { Component,Input, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/Brand/brand';
import { Car } from 'src/app/models/Cars/car';
import { CarDetail } from 'src/app/models/Cars/carDetail';
import { Color } from 'src/app/models/Color/color';
import { BrandService } from 'src/app/service/Brand/brand.service';
import { CarService } from 'src/app/service/Car/car.service';
import { ColorService } from 'src/app/service/Color/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm : FormGroup;
  car:Car;
  cars:Car[]=[]
  brands:Brand[]=[];
  colors:Color[]=[]
    id:number;
    carName:string;
    brandId:number;
    colorId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
  @Input() carForUpdate:CarDetail

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private brandService:BrandService,
    private colorService:ColorService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      
      if(params["id"]){
        this.getCarDetailsByCarId(params["id"])
        this.createCarForm();
        this.getBrands();
        this.getColor();
      }
    })
  }

  getColor(){
    this.colorService.GetColor().subscribe(response =>{
      this.colors = response.data
    })
  }

  getBrands(){
    this.brandService.GetBrands().subscribe(response =>{
      this.brands = response.data
    })
  }

 
 
  getCarDetailsByCarId(Id:number){
    this.carService.GetCarsByCarId(this.activatedRoute.snapshot.params["Id"]).subscribe(response=>{
      this.cars= response.data
      this.id = this.car.carId,
      this.carName = this.car.carName,
      this.brandId = this.car.brandId,
      this.colorId = this.car.colorId,
      this.modelYear = this.car.modelYear,
      this.dailyPrice = this.car.dailyPrice,
      this.description = this.car.description
    })
      
  }


  createCarForm(){
    this.carUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      carName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required], 
      description:["",Validators.required]
    });
  }

  update(){
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(carModel).subscribe(response=>{
        this.toastrService.success("Araç güncellendi","Başarılı")
        this.backToList();
      }
      ,
      (responseError)=>
      {
            this.toastrService.error(responseError.error.Message,"İşlem başarısız")
            console.log(responseError);
            
          
        
      }
      );
    } 
    else {
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }

  backToList(){
    this.router.navigate(["cars/list"])
  }
  }

