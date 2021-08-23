import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

  addCart() {
    let cart__ = JSON.parse(sessionStorage.getItem("cart") || "[]");
    cart__.push(this.item.id);
    sessionStorage.setItem("cart", cart__);
  }

}
