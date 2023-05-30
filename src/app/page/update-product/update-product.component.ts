import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  products: IProduct = {
    name: "",
    price: 0
  }

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
   this.route.paramMap.subscribe(param =>{
    const id = Number(param.get('id'));
    this.productService.getOne(id).subscribe(product => {
      this.products = product
    })
   })
    
  }
  onHandleSubmit() {
    this.productService.update(this.products).subscribe(products => {
      console.log(products);
      confirm("Sua san pham thanh cong")
    })
  }
}
