import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnalyticsComponent } from './analytics/analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopCartDataComponent } from './shop-cart-data/shop-cart-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    ShopCartDataComponent,
  ],
  entryComponents: [
    AnalyticsComponent,
    ShopCartDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
