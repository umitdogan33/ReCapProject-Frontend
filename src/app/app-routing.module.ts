import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfilUpdateComponent } from './components/profil-update/profil-update.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent },
  {path:"cars",component:CarComponent },
  {path:"rental", component:RentalComponent},
  {path:"cars/details/:Id", component:CardetailsComponent},
  {path:"cars/add", component:CarAddComponent ,canActivate:[LoginGuard]},
  {path:"cars/update/:Id", component:CarUpdateComponent},
  {path:"rental/add", component:RentalAddComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"profil",component:ProfilUpdateComponent},
  {path:"payment",component:PaymentComponent,canActivate:[LoginGuard]},
  {path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: "admin", component:AdminLayoutComponent, canActivate:[LoginGuard], children:[
      {path:"color/add",component:ColorAddComponent,}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }