import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const selector = 'shop-cart-data';
@Component({
  selector,
  templateUrl: './shop-cart-data.component.html',
  styleUrls: ['./shop-cart-data.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ShopCartDataComponent implements OnInit {

  static get is(): string { return 'shop-cart-data'; }

  constructor() { }

  ngOnInit() {
  }

}
