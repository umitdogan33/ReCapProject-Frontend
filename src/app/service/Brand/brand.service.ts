import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/Brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/resposeModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  apiUrl  = "https://localhost:44345/api/Brand/"

  GetBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"GetAll";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
}

Add(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"Add",brand);
}

Delete(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"Delete",brand);
}

}
