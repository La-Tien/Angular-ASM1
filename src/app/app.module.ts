import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UpdateProductComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AdminProductComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    ProductListComponent,
    AddProductComponent,
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
