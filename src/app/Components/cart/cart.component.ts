import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items!: Item[];

  constructor() { }

  ngOnInit(): void {
    this.items = JSON.parse(sessionStorage.getItem("items") || "[]");
  }

}
