import { Component, OnInit } from '@angular/core';
import { Product } from '../../domains/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public data: Product[];

  constructor(private _service: ProductService) {
  }

  ngOnInit() {
    this.data = this._service.getProducts();
  }

}
