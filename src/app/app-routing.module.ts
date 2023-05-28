import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
import { AddProductComponent } from './page/add-product/add-product.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: "", component: HomePageComponent }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductListComponent },
      { path: "product/add", component: AddProductComponent },
      { path: "product/:id/edit", component: UpdateProductComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
