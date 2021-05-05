import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order.class';
import {OrdersService} from '../../service/orders.service';
import {FlowersService} from '../../service/flowers.service';
import {Flower} from '../../model/flower.class';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  public order: Order;
  public flower: Flower;
  constructor( public activatedRoute: ActivatedRoute, public orderService: OrdersService, public flowerService: FlowersService) { }

  ngOnInit(): void {
    this.getOrder();
    this.getFlower();
  }
  getOrder(): void{
    const id = (+this.activatedRoute.snapshot.params.id);
    this.order = this.orderService.getOrderById(id);
    console.log(this.order);

  }
  getFlower(): void{
    const id = this.order.idFlower;
    this.flower = this.flowerService.getFlowerById(id);
    console.log(this.flower);
  }
}
