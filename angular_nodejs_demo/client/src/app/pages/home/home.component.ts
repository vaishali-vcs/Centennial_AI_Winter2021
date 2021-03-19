import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {BasePageComponent} from '../../partials/base-page/base-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { super(route); }

  ngOnInit(): void {
  }

}
