import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
import { ProductlistComponent } from './Component/productlist/productlist.component'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LayoutAdminComponent,
    BaseLayoutComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
