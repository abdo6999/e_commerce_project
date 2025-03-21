import { Component } from '@angular/core';
import myData  from '../../../../../assets/mokeProduct.json'
import { ProductCardComponent } from "../../../utilities/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { SmallProductCardComponent } from "../../../utilities/small-product-card/small-product-card.component";

@Component({
  selector: 'app-trending-products',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SmallProductCardComponent],
  templateUrl: './trending-products.component.html',
  styleUrl: './trending-products.component.scss'
})
export class TrendingProductsComponent {
  products = myData
}
