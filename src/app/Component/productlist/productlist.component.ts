import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/interface/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products: IProduct[]=[]
  title = "Quan li san pham";


  constructor(private productService: ProductsService){
    this.productService.get().subscribe(data =>{
      this.products = data
    },
    error => {
      console.log(error);
      
    })
  
  
  }
  Remove(id: any){
    const confirm = window.confirm('Ban co chac xoa truong nay hay khong?')
    if(confirm){
      this.productService.delete(id).subscribe(()=> {
        this.products = this.products.filter(item => item.id != id)
      })
    }
  }
}
