import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart-service.service';
import {Flower} from '../../owner-flower/model/flower.class';
import {Cart} from '../model/cart.class';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public flowers: Cart[];
  public quantity;
  constructor( public cartService: CartService) { }

  ngOnInit(): void {
    this.flowers = this.cartService.getItems();
    this.quantity = this.cartService.quantity;
  }

}
