import {Injectable} from '@angular/core';
import {Flower} from '../owner-flower/model/flower.class';
import {Cart} from './model/cart.class';
import {FlowersService} from '../owner-flower/service/flowers.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }
  items: Cart[];
  quantity = 0;
  id = 0;
  flower: Cart[];
  // tslint:disable-next-line:typedef
  addToCart(id: number) {
    this.quantity++;
    this.id++;
  }
  // addToCart(id: number) {
  //   if (this.items.length > 0) {
  //     // tslint:disable-next-line:prefer-for-of
  //     for (let i = 0; i < this.items.length; i++) {
  //       if (this.items[i].id === product.id) {
  //         this.quantity++;
  //       } else {
  //         this.items.push(product);
  //       }
  //     }
  //   } else {
  //     this.items.push(product);
  //   }
  //
  // }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
