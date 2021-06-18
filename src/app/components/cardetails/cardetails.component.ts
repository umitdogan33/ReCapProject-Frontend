import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/Cars/carDetail';
import { CarService } from 'src/app/service/Car/car.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {

  cars: CarDetail[] = [];
  carDto:CarDetail
  Images:string[]=[]
  imageBasePath = "https://localhost:44345"
  defaultImage="/Images/330f6c7f-4e58-462b-bdd7-adf91fceb72f.png"

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["Id"]){
        this.getCarDetail(params["Id"]);
      }
     
    });
  }


  getCarDetail(Id:number) {
    this.carService.GetCarDetailsByCarId(Id).subscribe((response) => {
     // this.cars = response.data;
      this.carDto = response.data
      console.log(response)
      this.Images=this.carDto.images
    });
  }

}
