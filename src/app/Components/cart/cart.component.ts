import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items!: Item[];
  price!: number;

  constructor() { }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem("items") || "[]");
    this.countCart();
  }

  countCart() {
    let cart__ = JSON.parse(sessionStorage.getItem("cart") || "[]");
    this.price = 0;
    this.items.forEach((val) => {
      if (cart__.indexOf(val.id) !== -1)
        this.price += val.price;
    })
  }

  clearCart() {
    sessionStorage.removeItem("cart");
    this.price = 0;
    window.location.href = "/cart";
  }

}
