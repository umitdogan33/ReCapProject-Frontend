import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/Rental/rental';
import { AuthService } from 'src/app/service/auth.service';
import { PaymentService } from 'src/app/service/payment.service';
import { RentalService } from 'src/app/service/Rental/rental.service';
import { CustomerCreditCardService } from 'src/app/service/customer-credit-card-service.service';
import { UserService } from 'src/app/service/user.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rental: Rental;
  nameOnTheCard: string;
  cardNumber: string;
  cardCvv: string;
  expirationDate:string;
  payment: Payment;
  savedCards: Payment[]=[];
  cardExist: Boolean = false;
  creditCardForm: FormGroup;
  selectedCard: Payment;
 
  constructor(

    private paymentService: PaymentService,
    private rentalService: RentalService,
    private router:Router,
    private toastrService: ToastrService,
    private customerCreditCardService:CustomerCreditCardService,
    private authService:AuthService,
    private formBuilder:FormBuilder,
    
  ) {}

  ngOnInit(): void {
    this.setCreditCardForm();
  }

  setCreditCardForm(){
    this.creditCardForm = this.formBuilder.group({
      savedCards: [""],
      nameOnTheCard: ["",Validators.required],
      cardNumber: ["", Validators.required],
      cardCvv: ["", Validators.required],
      expirationDate: ["", Validators.required],
    })
  }

  add(){
    if(this.creditCardForm.valid){
    let colormodel = Object.assign({},this.creditCardForm.value)
    this.customerCreditCardService.pay(colormodel).subscribe(response=> {
      console.log(response)
      this.toastrService.success(response.message,"başarılı")
      this.router.navigate(["/cars"]).then(c=>window.location.reload())
    })    
    
  
    }

  }
  
}

