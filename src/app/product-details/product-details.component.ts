import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products-service.service';
import { IProduct } from '../modal/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  // tslint:disable-next-line: variable-name
  constructor(private _productsService: ProductsService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._productsService.getProduct(id).subscribe(product => this.product = product);
  }
  onBack() {
    this._router.navigate(['/products']);
  }
}
