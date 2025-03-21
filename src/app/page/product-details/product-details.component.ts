import { Component } from '@angular/core';
import { HeadingBarComponent } from "../../component/heading-bar/heading-bar.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { ThumbnailsComponent } from "../../component/product-details/thumbnails/thumbnails.component";
import { DescriptionComponent } from "../../component/product-details/description/description.component";
import { RelatedProductsComponent } from "../../component/product-details/related-products/related-products.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [HeadingBarComponent, NavBarComponent, ThumbnailsComponent, DescriptionComponent, RelatedProductsComponent, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

}
