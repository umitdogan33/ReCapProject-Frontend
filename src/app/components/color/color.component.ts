import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Color/color';
import { ColorService } from 'src/app/service/Color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[]
  currentColor:Color;
  dataLoaded=false;
  filterText="";
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.GetColors();
  }

  GetColors(){
    this.colorService.GetColor().subscribe((response)=> {
      this.colors= response.data;
      this.dataLoaded =true;
    });
}

SetCurrentBrand(brand:Color){
  this.currentColor=brand;
  }

  getCurrentColorClass(brand:Color){
    if(brand==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
}

}
