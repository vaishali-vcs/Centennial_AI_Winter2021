import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { super(route); }

  ngOnInit(): void {
  }

}
