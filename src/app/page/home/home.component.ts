import { Component } from '@angular/core';
import { HeadingBarComponent } from "../../component/heading-bar/heading-bar.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { HeroSectionComponent } from "../../component/home/hero-section/hero-section.component";
import { FeaturedProductsComponent } from "../../component/home/products-components/featured-products/featured-products.component";
import { LeatestProductsComponent } from "../../component/home/products-components/leatest-products/leatest-products.component";
import { ServicesComponent } from "../../component/home/services/services.component";
import { UniqueFeatureProductComponent } from "../../component/home/products-components/unique-feature-product/unique-feature-product.component";
import { TrendingProductsComponent } from "../../component/home/products-components/trending-products/trending-products.component";
import { SmallProductCardComponent } from "../../component/utilities/small-product-card/small-product-card.component";
import { DiscountItemComponent } from "../../component/home/products-components/discount-item/discount-item.component";
import { TopCategoriesComponent } from "../../component/home/products-components/top-categories/top-categories.component";
import { SubscriptionComponent } from "../../component/home/subscription/subscription.component";
import { LeatestBlogComponent } from "../../component/home/leatest-blog/leatest-blog.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingBarComponent, NavBarComponent, HeroSectionComponent, FeaturedProductsComponent, LeatestProductsComponent, ServicesComponent, UniqueFeatureProductComponent, TrendingProductsComponent, SmallProductCardComponent, DiscountItemComponent, TopCategoriesComponent, SubscriptionComponent, LeatestBlogComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
