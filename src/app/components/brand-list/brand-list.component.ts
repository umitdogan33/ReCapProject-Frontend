import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'primeng/dynamicdialog';
import { Brand } from 'src/app/models/Brand/brand';
import { AuthService } from 'src/app/service/auth.service';
import { BrandService } from 'src/app/service/Brand/brand.service';
import { BrandAddComponent } from '../brand-add/brand-add.component';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  filterText=""
  brands:Brand[]
 brand:Brand
 isAuthenticated :boolean
 selectedBrand:Brand=null
 selectBrand:Brand
  constructor(private brandService:BrandService,
    private toastrService:ToastrService,
    private authService:AuthService,
    private dialogService:DialogService) { }

  ngOnInit(): void {
    this.getBrands()
  }

getBrands(){
  this.brandService.GetBrands().subscribe((response)=>{
    this.brands=response.data
  })
}
deleteBrand(brand:Brand){
  this.brandService.Delete(brand).subscribe((response)=>{
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
setSelectedBrand(brand:Brand){
  this.selectedBrand = brand
}
add() {
  const ref = this.dialogService.open(BrandAddComponent, {
      header: 'Marka ekle',
      width: '45%',

  });
}


}