import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] = []
  title = "Quan li san pham"

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(data => {
      this.products = data
    },
      error => {
        console.log(error)

      })
  }
  Remove(id: any) {
    this.productService.remove(id).subscribe(() => {
      confirm("Ban co chac chan muon xoa san pham nay?")
      this.products = this.products.filter(item => item.id != id)
    })
  }
}
