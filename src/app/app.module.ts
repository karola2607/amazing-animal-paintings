import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
