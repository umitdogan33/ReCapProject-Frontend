import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  NewPath= environment.BaseUrl+"Auth/"
  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.NewPath+"login",user);
  }

Register(user:RegisterModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.NewPath+"register",user) 
}

isAuthencation(){
  if(localStorage.getItem("token")){
    return true;
  }

  else{
    return false;
  }
}

}
