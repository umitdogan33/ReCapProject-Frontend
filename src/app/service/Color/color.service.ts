import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/Color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/resposeModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl  = "https://localhost:44345/api/Colors/"

  GetColor():Observable<ListResponseModel<Color>>{
    let newpath = this.apiUrl+"GetAll"
    return this.httpClient.get<ListResponseModel<Color>>(newpath);
}


AddColor(color:Color):Observable<ResponseModel>{
  let newpath  = this.apiUrl+"Add"
  return this.httpClient.post<ResponseModel>(newpath,color)
}
}
