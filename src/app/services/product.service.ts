import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:7206/api/';


  constructor(private httpClient: HttpClient) { }

   getProducts():Observable<ListResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall"
     return this.httpClient.get<ListResponseModel<Product>>(newPath);
       
        }
        getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
          let newPath=this.apiUrl+"products/getallbycategoryid?categoryId="+categoryId
          return this.httpClient.get<ListResponseModel<Product>>(newPath)
        }

        add(product:Product){
         return this.httpClient.post(this.apiUrl+"products/add",product)
        }
    }

