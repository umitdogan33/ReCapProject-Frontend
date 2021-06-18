import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/Brand/brand';
import { Car } from 'src/app/models/Cars/car';
import { CarDetail } from 'src/app/models/Cars/carDetail';
import { Color } from 'src/app/models/Color/color';
import { BrandService } from 'src/app/service/Brand/brand.service';
import { CarService } from 'src/app/service/Car/car.service';
import { ColorService } from 'src/app/service/Color/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

   imageBasePath = "https://localhost:44345"
   defaultImg="/Images/330f6c7f-4e58-462b-bdd7-adf91fceb72f.png"

  cars:Car[]=[];
  CarDetails:CarDetail[];
  colors:Color[];
  brands:Brand[];
  dataLoaded =false;
  filterText="";
  brandId: number;
  colorId: number;
  constructor(private carService:CarService,
    private colorService:ColorService,
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService 
    ) { }


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=> {
      if (params['brandId'] && params['colorId']) {
        this.getFilteredCars(params['brandId'], params['colorId']);
      }
      else{
      this.GetDetails();
      this.GetBrands();
      this.GetColors();
      }
    })
  }

  
  GetDetails(){
    this.carService.GetCarDetails().subscribe((response)=>{
      this.CarDetails=response.data;
      this.dataLoaded=true;
      console.log(response);
  });

  

  
  }
  GetByBrandId(brandId:number){
    this.carService.GetCarsByBrandId(brandId).subscribe((response)=>{
      this.CarDetails=response.data;
      this.dataLoaded=true;
    })
  }

  GetBColorId(colorId:number){
    this.carService.GetCarsByColorId(colorId).subscribe((response)=>{
      this.CarDetails=response.data;
      this.dataLoaded=true;
    })
  }

  GetCars(){
    this.carService.GetCars().subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
      
  });
}

GetColors(){
  this.colorService.GetColor().subscribe((response)=>{
    this.colors=response.data;
    console.log(this.colors);
    
    this.dataLoaded=true;
    
});
}

GetBrands(){
  this.brandService.GetBrands().subscribe((response)=>{
    this.brands=response.data;
    this.dataLoaded=true;
    
});
}
getFilteredCars(brandId: number, colorId: number) {
this.carService.GetCarsByBrandIdAndColorId(brandId,colorId).subscribe((response)=>{
  this.CarDetails = response.data
})
}
getSelectedColorId(colorId: number) {
  if(this.colorId == colorId)
  {
    return true;
  }
  else
  {
    return false;
  }
}

getSelectedBrandId(brandId: number) {
  if(this.brandId == brandId)
  {
    return true;
  }
  else
  {
    return false;
  }
}
}
