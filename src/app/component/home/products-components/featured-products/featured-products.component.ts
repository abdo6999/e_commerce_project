import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../../../utilities/product-card/product-card.component";
import myData  from '../../../../../assets/mokeProduct.json'
@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
  products = myData
}
