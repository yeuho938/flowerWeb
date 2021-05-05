import { Injectable } from '@angular/core';
import {Flower} from '../model/flower.class';

@Injectable({
  providedIn: 'root'
})
export class FlowersService {
  public flowers: Flower[] = [
    {
      id: 1,
      name: 'Rose Land',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/UIlld3EKsC1nXGLmNk7jOYhJTeiRZLqVTNYBxGo8.jpeg',
      price: 100000,
      remainingStock: 34
    },
    {
      id: 2,
      name: 'Sunny Smile',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/nQA8Ly0ScAuRPROTrxjlYWuqnH9pEUP0xry7aEce.jpeg',
      price: 200000,
      remainingStock: 20
    },
    {
      id: 3,
      name: 'Hermosa',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/Get25etQL1TP24DW17fMkRaz9Uf6HF6l0SbdsJzL.jpeg',
      price: 140000,
      remainingStock: 10
    },
    {
      id: 4,
      name: 'Carla',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/hk2okSbWyo9B1QIJJt7eu1El9fOLtsZKRQ9Mr2Te.jpeg',
      price: 140000,
      remainingStock: 30
    },
    {
      id: 5,
      name: 'Rose Land',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/UIlld3EKsC1nXGLmNk7jOYhJTeiRZLqVTNYBxGo8.jpeg',
      price: 160000,
      remainingStock: 31
    },
    {
      id: 6,
      name: 'Fly me to The Moon',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/b0Ys3ScVvXmgH5QJ2DFGZGpmpvCZewKNUX1OcSwl.jpeg',
      price: 110000,
      remainingStock: 30
    },
    {
      id: 7,
      name: 'Jubilant',
      image: 'https://assets.flowerstore.vn/uploads/products/photos/EKiwoQQHbH1GK5eB6996Cnv1Kn7Rv1P7ubteSCbQ.jpeg',
      price: 400000,
      remainingStock: 30
    }
  ];
  constructor() { }
  getListFlower(): Flower[]{
    return this.flowers;
  }
  getFlowerById(id: number): any{
      let getId = null;
      for (const item of this.flowers) {
        if (item.id === id){
          getId = item;
        }
      }
      return getId;
  }
}
