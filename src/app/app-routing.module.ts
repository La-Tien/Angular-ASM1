import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductlistComponent } from './Component/productlist/productlist.component';
import { AddProductComponent } from './page/add-product/add-product.component';
import { UpdateProductComponent } from './page/update-product/update-product.component';
const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      {path: "", component: HomePageComponent}
    ]
  },
  {
    path: 'admin', component: LayoutAdminComponent, children: [
      {path: "", redirectTo: "deshboard", pathMatch: "full"},
      {path: "dashboard", component: DashboardComponent},
      {path: "product", component: ProductlistComponent},
      {path: "product/add", component: AddProductComponent},
      {path: "product/:id/edit", component: UpdateProductComponent},

    ]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
