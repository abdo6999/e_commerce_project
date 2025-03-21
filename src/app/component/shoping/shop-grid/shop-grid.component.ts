import { Component } from '@angular/core';
import { ProductCardGridComponent } from "../../utilities/product-card-grid/product-card-grid.component";
import { ProductCardListComponent } from "../../utilities/product-card-list/product-card-list.component";

@Component({
  selector: 'app-shop-grid',
  standalone: true,
  imports: [ProductCardGridComponent, ProductCardListComponent],
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.scss'
})
export class ShopGridComponent {

}
