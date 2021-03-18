import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from './../../partials/base-page/base-page.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { super(route); }

  ngOnInit(): void {
  }

}
