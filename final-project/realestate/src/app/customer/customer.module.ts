import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';



@NgModule({
  declarations: [
    BuyerComponent,
    SellerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
