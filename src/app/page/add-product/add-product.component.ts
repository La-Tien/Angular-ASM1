import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  products: IProduct = {
    name: "",
    price: 0
  }

  constructor(private productService: ProductsService) {

  }
  onHandleSubmit() {
    this.productService.add(this.products).subscribe(product => {
      console.log(product);
      confirm("Them san pham thanh cong")
    })
  }
}
