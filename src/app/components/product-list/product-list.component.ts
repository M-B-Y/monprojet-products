import { Component, OnInit } from '@angular/core';
import { Product } from '../../domains/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  data: Product[];

  constructor() {
    this.data = [
      {code: 'P100', label: 'Coffee', priceUnit: 10},
      {code: 'P200', label: 'Coca Cola', priceUnit: 12},
      {code: 'P300', label: 'Tea', priceUnit: 8},
    ];
  }

  ngOnInit() {
  }

}
