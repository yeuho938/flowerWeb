import {Component, OnInit} from '@angular/core';
import {Flower} from '../../owner-flower/model/flower.class';
import {FlowersService} from '../../owner-flower/service/flowers.service';
import {UserService} from '../user.service';
import {CartService} from '../cart-service.service';
import {Cart} from '../model/cart.class';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public flowers: Flower[];
  public images: string[];
  public quantity = 0;
  public id = 0;
  constructor( public flowerservice: FlowersService, public userService: UserService, public cartService: CartService) { }

  ngOnInit(): void {
    this.flowers = this.flowerservice.getListFlower();
    this.images = this.userService.images;
    console.log(this.cartService.items);
  }
  addToCart(id: number): void{
    const quantity = this.quantity++;
    const idCart = this.id++;
    const cart = new Cart(idCart, id, quantity);
    console.log(id);
    this.cartService.addToCart(cart);
  }

}
