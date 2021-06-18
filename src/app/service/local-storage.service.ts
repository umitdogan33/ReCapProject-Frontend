import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
  constructor() {this.localStorage = window.localStorage; }

Get(key:string){
  return this.localStorage.getItem(key)
}

Set(key:string,value:string){
  this.localStorage.setItem(key,value)
}

Remove(key:string){
  this.localStorage.removeItem(key)
}

Clean(){
  this.localStorage.clear()
}

GetToken(){
  return localStorage.getItem("token")
}




}
