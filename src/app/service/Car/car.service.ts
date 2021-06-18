import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/Cars/car';
import { CarDetail } from 'src/app/models/Cars/carDetail';
import { ResponseModel } from 'src/app/models/resposeModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  apiUrl  = "https://localhost:44345/api/"
  currentCar: Car;

  GetCars():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"Cars/GetAll";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  GetCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"Cars/GetAllDetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"Cars/GetByBrandId?BrandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  GetCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"Cars/GetByColorId?Id="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  GetCarsByBrandIdAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl+"Cars/GetByBrandIdAndColorId?"
    if(brandId !=0){
      newPath +="brandId="+brandId
    }
    if(colorId != 0){
      newPath +="&colorId="+colorId
    }
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Cars/Add", car)
  }

  GetCarDetailsByCarId(Id:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"Cars/GetCarsDetailByCarId?Id="+Id

    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath)
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Cars/Update",car)
  }
  setCurrentCar(car: Car) {
    this.currentCar = car;
  }
  
  getCurrentCar() {
    return this.currentCar;
  }

  GetCarsByCarId(Id:number):Observable<ListResponseModel<Car>>{

    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"Cars/GetCarByCarId")
  }

}
