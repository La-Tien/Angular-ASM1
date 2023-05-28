import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(private productService: ProductService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.get(id).subscribe(product => {
        this.products = product
      }, error=>{
        console.log(error);
        
      }
      )
    })
    
  }
  onHandleSubmit(){
    this.productService.update(this.products).subscribe(product=> {
      console.log(product);
      confirm("Sua san pham thanh cong")
      
    })
  }
}
