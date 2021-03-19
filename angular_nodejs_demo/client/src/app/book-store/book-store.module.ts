import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import { BookStoreComponent } from './book-store.component';
import { CounterDirective } from './counter.directive';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [BookStoreComponent, CounterDirective, CheckoutComponent, CartDetailComponent],
  exports: [BookStoreComponent, CounterDirective, CartDetailComponent, CheckoutComponent]
})
export class BookStoreModule{

}
