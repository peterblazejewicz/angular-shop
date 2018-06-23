import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AnalyticsComponent } from './analytics/analytics.component';
import { ShopCartDataComponent } from './shop-cart-data/shop-cart-data.component';

@Component({
  selector: 'shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

  constructor(private injector: Injector) {
    customElements.define('shop-analystics', createCustomElement(AnalyticsComponent, { injector }));
    customElements.define('shop-cart-data', createCustomElement(ShopCartDataComponent, { injector }));
  }

}
