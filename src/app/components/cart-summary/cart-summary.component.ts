import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-summary',
  standalone: false,
  
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]

  constructor(private cartService:CartService,private toastrService:ToastrService){}
  ngOnInit(): void {
   this.getCart()
  }

  getCart(){
    this.cartItems=this.cartService.list()
  }
  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
    this.toastrService.warning("Sepetten bir ürün silindi.",product.productName)
  }


}
