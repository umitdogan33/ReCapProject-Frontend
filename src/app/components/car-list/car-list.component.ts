import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/Cars/carDetail';
import { CarService } from 'src/app/service/Car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  dataLoaded:boolean=false
  carDto:CarDetail[];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.GetCars();
  }

  GetCars(){
    this.carService.GetCarDetails().subscribe(response => {
      this.carDto = response.data;
  
      this.dataLoaded = true;
    });


  }

}
