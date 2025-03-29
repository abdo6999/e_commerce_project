import { Component } from '@angular/core';
import myData  from '../../../../../assets/mokeProduct.json'
@Component({
  selector: 'app-featured-products',

  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  products = myData
}
