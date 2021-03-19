import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookStoreComponent } from './book-store/book-store.component';

const routes: Routes = [
{path: 'home', component: HomeComponent, data: {title: 'Home'}},
{path: 'about', component: AboutComponent, data: {title: 'About'}},
{path: 'products', component: ProductsComponent, data: {title: 'Products'}},
{path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
{path: 'services', component: ServicesComponent, data: {title: 'Services'}},
{path: 'books', component: BookStoreComponent, data: {title: 'bookstore'}},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
