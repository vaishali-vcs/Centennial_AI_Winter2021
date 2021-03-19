import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartSummaryComponent } from '../book-store/cart-summary/cart-summary.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HeaderComponent, FooterComponent, CartSummaryComponent],
  exports: [HeaderComponent, FooterComponent, CartSummaryComponent]
})
export class PartialsModule{

}
