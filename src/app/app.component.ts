import { createCustomElement } from '@angular/elements';
import { Component, Injector } from '@angular/core';
import { AnalyticsComponent } from './analytics/analytics.component';

@Component({
  selector: 'shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

  constructor(private injector: Injector) {
    const component = createCustomElement(AnalyticsComponent, { injector });
    customElements.define('shop-analystics', component);
  }

}
