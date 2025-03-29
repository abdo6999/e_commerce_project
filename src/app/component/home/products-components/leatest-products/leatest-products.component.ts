import { Component } from '@angular/core';
import myData  from '../../../../../assets/mokeProduct.json'

@Component({
  selector: 'app-leatest-products',

  templateUrl: './leatest-products.component.html',
  styleUrl: './leatest-products.component.scss'
})
export class LeatestProductsComponent {
  products = myData

}
