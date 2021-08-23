import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Input() isCartPage!: boolean;
  @Output() cartRedefine: EventEmitter<null> = new EventEmitter();
  isCart!: boolean

  constructor() { }

  ngOnInit(): void {
    this.isCart = JSON.parse(sessionStorage.getItem("cart") || "[]").indexOf(this.item.id) !== -1;
  }

  addCart() {
    let cart__ = JSON.parse(sessionStorage.getItem("cart") || "[]");
    cart__.push(this.item.id);
    sessionStorage.setItem("cart", JSON.stringify(cart__));
    this.isCart = true;
    this.cartRedefine.emit();
  }

  removeCart() {
    let cart__ = JSON.parse(sessionStorage.getItem("cart") || "[]");
    let ind__ = cart__.indexOf(this.item.id);
    cart__.splice(ind__, 1);
    sessionStorage.setItem("cart", JSON.stringify(cart__));
    this.isCart = false;
    this.cartRedefine.emit();
  }

}
