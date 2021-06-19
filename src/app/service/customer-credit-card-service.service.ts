import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerCreditCard } from '../models/customerCreditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/resposeModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerCreditCardService {

  apiUrl = environment.BaseUrl;
  constructor(private httpClient:HttpClient,
              private authService:AuthService) { }
  
    saveCreditCard(payment:Payment):Observable<ResponseModel>{
      let customerCreditCard:CustomerCreditCard = {customerId:this.authService.currentUserId,cardId:payment.id}
      let newPath = this.apiUrl +"customercreditcard/add"
      return this.httpClient.post<ResponseModel>(newPath,customerCreditCard)
    }
    getByCustomerId(customerId:number):Observable<ListResponseModel<CustomerCreditCard>>{
      let newPath = this.apiUrl + "customercreditcard/getbycustomerid?customerId="+customerId
      return this.httpClient.get<ListResponseModel<CustomerCreditCard>>(newPath)
    }
}
