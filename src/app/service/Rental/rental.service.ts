import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDetails } from 'src/app/models/Rental/rentalDetails';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  apiUrl  = "https://localhost:44345/api/Rental/GetAllDetails"

GetRentalDetails():Observable<ListResponseModel<RentalDetails>>{
  return this.httpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl);
}
}
