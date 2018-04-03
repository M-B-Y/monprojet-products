import { Injectable } from '@angular/core';
import { Product } from '../domains/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): Product[] {
    return [
      {code: 'P100', label: 'Coffee', priceUnit: 10},
      {code: 'P200', label: 'Coca Cola', priceUnit: 12},
      {code: 'P300', label: 'Tea', priceUnit: 8},
      {code: 'P400', label: 'Orange Juice', priceUnit: 15},
    ];
  }

}
