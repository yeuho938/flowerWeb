export class Cart{
  id?: number;
  idFlower: number;
  quantity: number;
  constructor(id: number, idFlower: number, quantity: number) {
    this.id = id;
    this.idFlower = idFlower;
    this.quantity = quantity;
  }
}
