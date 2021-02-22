import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements OnInit {

  produtos!: Array<Product>
  columns = ['id', 'name', 'price']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe( produtos => {
      this.produtos = produtos; 
      console.log(produtos);
    })
  }

}
