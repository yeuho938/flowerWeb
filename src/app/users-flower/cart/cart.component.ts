import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart-service.service';
import {Flower} from '../../owner-flower/model/flower.class';
import {FlowersService} from '../../owner-flower/service/flowers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public flowerInCart: any;
  public flowers: Flower[];
  public flower: Flower;
  constructor( public cartService: CartService, public flowerService: FlowersService) { }

  ngOnInit(): void {
    this.flowerInCart = this.cartService.items;
    this.flowers = this.flowerService.getListFlower();

    console.log(this.flowerInCart);
    //this.getFlowerInCart();
  }
  getFlowerInCart(): void{
    for (const item of this.flowers) {
      for (const item1 of this.flowerInCart) {
        if (item.id === item1.idFlower) {
          this.flower = item;
        }
      }
    }
    console.log(this.flower);
  }
}
