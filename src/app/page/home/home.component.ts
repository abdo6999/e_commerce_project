import { Component } from '@angular/core';
import { HeadingBarComponent } from "../../component/heading-bar/heading-bar.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { HeroSectionComponent } from "../../component/hero-section/hero-section.component";
import { FeaturedProductsComponent } from "../../component/products-components/featured-products/featured-products.component";
import { LeatestProductsComponent } from "../../component/products-components/leatest-products/leatest-products.component";
import { ServicesComponent } from "../../component/services/services.component";
import { UniqueFeatureProductComponent } from "../../component/products-components/unique-feature-product/unique-feature-product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingBarComponent, NavBarComponent, HeroSectionComponent, FeaturedProductsComponent, LeatestProductsComponent, ServicesComponent, UniqueFeatureProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
