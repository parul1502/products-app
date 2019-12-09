import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products-service.service';
import { IProduct } from '../modal/product';
@Component({
selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

// tslint:disable-next-line: variable-name
constructor(private _productsService: ProductsService) {
}

// tslint:disable-next-line:variable-name
// tslint:disable-next-line: member-ordering

get filterText() {
return this._filterText;
}

set filterText(newValue: string) {
this._filterText = newValue;
this.filteredList = this._filterText ? this.applyFilter(this.filterText) : this.products;
}
    showImage = false;
    pageTitle = 'Products List ';
    imageWidth = 50;
    imageMargin = 2;
    // tslint:disable-next-line: variable-name
    _filterText: string;
// tslint:disable-next-line: member-ordering
products: IProduct[];
// tslint:disable-next-line: member-ordering
filteredlist: IProduct[];

filteredList = this.products;

ngOnInit() {
    this._productsService.getProducts().subscribe((products: IProduct[]) => {
        this.products = products;
        this.filteredList = products;
    });
}
showOrHideImage = () => {
this.showImage = !this.showImage;
}
applyFilter(name: string) {
return this.products.filter((product: any) => product.productName.indexOf(name) !== -1);
}
onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
}
}
