import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Car } from 'src/app/models/Cars/car';
import { Rental } from 'src/app/models/Rental/rental';
import { ResponseModel } from 'src/app/models/resposeModel';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
  }



}
