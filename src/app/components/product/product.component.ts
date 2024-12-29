import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductResponseModel } from '../../models/productResponseModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:7206/api/products/getall';
 
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
   this.getProducts()
  }

  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products=response.data
      });
  }
}
