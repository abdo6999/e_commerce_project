import { Component } from '@angular/core';
import { ProductCardComponent } from "../../../utilities/product-card/product-card.component";
import { CommonModule } from '@angular/common';
import myData  from '../../../../../assets/mokeProduct.json'

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.scss'
})
export class TopCategoriesComponent {
  products = myData

}
