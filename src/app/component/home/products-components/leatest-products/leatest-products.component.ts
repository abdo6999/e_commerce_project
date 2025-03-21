import { Component } from '@angular/core';
import { ProductCardComponent } from "../../../utilities/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import myData  from '../../../../../assets/mokeProduct.json'

@Component({
  selector: 'app-leatest-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './leatest-products.component.html',
  styleUrl: './leatest-products.component.scss'
})
export class LeatestProductsComponent {
  products = myData

}
