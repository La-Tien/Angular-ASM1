import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(private productService: ProductService,){}  
  
  onHandleSubmit(){
    this.productService.update(this.products).subscribe(product=> {
      console.log(product);
      confirm("Them san pham thanh cong")
      
    })
  }
}
