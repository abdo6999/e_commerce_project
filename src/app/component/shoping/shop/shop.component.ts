import { Component } from '@angular/core';
import { ProductFilterBarComponent } from "../product-filter-bar/product-filter-bar.component";
import { SideBarFilterComponent } from "../side-bar-filter/side-bar-filter.component";
import { ShopGridComponent } from "../shop-grid/shop-grid.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductFilterBarComponent, SideBarFilterComponent, ShopGridComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
