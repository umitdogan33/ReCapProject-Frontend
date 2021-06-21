import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';
import { Color } from 'src/app/models/Color/color';
import { AuthService } from 'src/app/service/auth.service';
import { ColorService } from 'src/app/service/Color/color.service';
import { ColorAddComponent } from '../color-add/color-add.component';


@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]
 color:Color
 isAuthenticated :boolean
 selectedColor:Color=null
 selectColor:Color
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private authService:AuthService,
    private dialogService:DialogService) { }

  ngOnInit(): void {
    this.getColors()
  }

getColors(){
  this.colorService.GetColor().subscribe((response)=>{
    this.colors=response.data
  })
}
deleteColor(color:Color){
  this.colorService.Delete(color).subscribe((response)=>{
    this.toastrService.error("Renk silindi")
    setTimeout(()=>{window.location.reload},1500)
  })
}
checkToLogin(){
  if(this.authService.isAuthencation()){
    return  true;
  }else{
    return false;
  }
}
setSelectedColor(color:Color){
  this.selectedColor = color
}
add() {
  const ref = this.dialogService.open(ColorAddComponent, {
      header: 'Renk ekle',
      width: '45%',

  });
}




}
