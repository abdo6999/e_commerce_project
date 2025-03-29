import { Component } from '@angular/core';
import myData  from '../../../../../assets/mokeProduct.json'

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.scss'
})
export class TrendingProductsComponent {
  products = myData
}
