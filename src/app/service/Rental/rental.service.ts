import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/Rental/rental';
import { RentalDetails } from 'src/app/models/Rental/rentalDetails';
import { ResponseModel } from 'src/app/models/resposeModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl  = "https://localhost:44345/api/Rental/"

GetRentalDetails():Observable<ListResponseModel<RentalDetails>>{
  let newPath = this.apiUrl+"GetAllDetails" 
  return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath);
}

add(rental:Rental):Observable<ResponseModel>{
  let newPath = this.apiUrl+"Add"
  return this.httpClient.post<ResponseModel>(newPath,rental)
}}
