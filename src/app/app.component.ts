import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Northwind';
  product={productId:1,productName:"Bardak",categoryId:2,unitPrice:10}
  product2={productId:2,productName:"Laptop",categoryId:2,unitPrice:10}
  product3={productId:3,productName:"Mouse",categoryId:2,unitPrice:10}
  product4={productId:4,productName:"Keyboard",categoryId:2,unitPrice:10}
  product5={productId:5,productName:"Camera",categoryId:2,unitPrice:10}
  
  user="Ayhan Özer"
  products=[this.product,this.product2,this.product3,this.product4,this.product5]
}
