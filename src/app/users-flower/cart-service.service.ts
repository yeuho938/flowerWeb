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
  items: Cart[] = new Array();

  quantity = 0;
  id = 0;
  idFlower: number;
  flower: Cart[];
  addToCart(cart: Cart): void {
    this.items.push(cart);
  }
  getItems(): Cart[] {
    return this.items;
  }

  clearCart(): Cart[] {
    this.items = [];
    return this.items;
  }
}
