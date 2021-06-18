import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Rental/rental';
import { RentalDetails } from 'src/app/models/Rental/rentalDetails';
import { RentalService } from 'src/app/service/Rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  RentalsDto:RentalDetails[]=[];
  currentRentals:Rental;
  dataLoaded =false;
  constructor(private rentalService:RentalService) { }
 

  ngOnInit(): void {
    this.GetDetails();
  }

  GetDetails(){
    this.rentalService.GetRentalDetails().subscribe((response)=>{
      this.RentalsDto=response.data;
      this.dataLoaded=true;
  });

}

SetCurrentRental(rentals:Rental){
  this.currentRentals=rentals;
}
}
