import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {
  items: Item[];

  constructor() {
    this.items = [
      {
        id: 1,
        title: "First Item",
        desc: "This is the first item",
        price: 40
      },
      {
        id: 2,
        title: "Second Item",
        desc: "This is the second item",
        price: 84
      },
      {
        id: 3,
        title: "Third Item",
        desc: "This is the third item",
        price: 15
      },
      {
        id: 4,
        title: "Fourth Item",
        desc: "This is the fourth item",
        price: 35
      },
      {
        id: 5,
        title: "Fifth Item",
        desc: "This is the fifth item",
        price: 20
      }
    ];
  }

  ngOnInit(): void {
  }

}
