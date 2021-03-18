import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { BasePageComponent } from '../partials/base-page/base-page.component';


@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [AboutComponent, ProductsComponent,
    ContactComponent,  HomeComponent,  ServicesComponent, BasePageComponent],
  exports: [AboutComponent, ProductsComponent,
    ContactComponent,  HomeComponent,  ServicesComponent, BasePageComponent]
})
export class PagesModule{

}
