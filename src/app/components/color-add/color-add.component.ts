import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/Color/color';
import { ColorService } from 'src/app/service/Color/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddGroup:FormGroup;
  colors:Color[];

  constructor(private colorService:ColorService,private router:Router,private toastrService:ToastrService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.CreateColorAddForm();
  }

  CreateColorAddForm(){
    this.colorAddGroup=this.formbuilder.group({
      colorName:["",Validators.required]
    })
  }


  add(){
  if(this.colorAddGroup.valid){
  let colormodel = Object.assign({},this.colorAddGroup.value)
  this.colorService.AddColor(colormodel).subscribe(response=> {
    console.log(response)
    this.toastrService.success(response.message,"başarılı")
    this.router.navigate(["/cars"]).then(c=>window.location.reload())
  },responseError=>{
    console.log(responseError);
    
    if(responseError.error.Errors.length>0){
      console.log(responseError.error.Errors)
      for (let i = 0; i < responseError.error.Errors.length; i++) {

      this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata"
        )
      }
    }
  })    
  

  }

  else{
    this.toastrService.error("Formunuz eksik","dikkat");
  }
}


backToList(){
  this.router.navigate(["cars"])
}


}
