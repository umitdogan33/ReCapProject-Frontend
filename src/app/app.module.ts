
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { SplitButtonModule } from 'primeng/splitbutton';  
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { ColorComponent } from './components/color/color.component';
import { FilterpipeCarPipe } from './pipe/filterpipe-car.pipe';
import { FilterpipebrandPipe } from './pipe/filterpipebrand.pipe';
import { FilterpipeColorPipe } from './pipe/filterpipe-color.pipe';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilUpdateComponent } from './components/profil-update/profil-update.component';
import { HomeComponent } from './components/home/home.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ErrorComponent } from './components/error/error.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    RentalComponent,
    ColorComponent,
    FilterpipeCarPipe,
    FilterpipebrandPipe,
    FilterpipeColorPipe,
    CardetailsComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    RentalAddComponent,
    CarUpdateComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ProfilUpdateComponent,
    HomeComponent,
    BrandListComponent,
    AdminLayoutComponent,
    PaymentComponent,
    ErrorComponent,
    CarListComponent,
    ColorListComponent,
    ColorUpdateComponent,
    BrandUpdateComponent
  ],
  imports: [   
    MenuModule,
    ConfirmDialogModule,
     SplitButtonModule,
    ButtonModule,
    BrowserModule,
    TableModule,
    CardModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},DialogService,ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
