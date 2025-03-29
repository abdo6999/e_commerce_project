import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeadingBarComponent } from './component/heading-bar/heading-bar.component';
import { HeroSectionComponent } from './component/home/hero-section/hero-section.component';
import { LeatestBlogComponent } from './component/home/leatest-blog/leatest-blog.component';
import { DiscountItemComponent } from './component/home/products-components/discount-item/discount-item.component';
import { FeaturedProductsComponent } from './component/home/products-components/featured-products/featured-products.component';
import { LeatestProductsComponent } from './component/home/products-components/leatest-products/leatest-products.component';
import { TopCategoriesComponent } from './component/home/products-components/top-categories/top-categories.component';
import { TrendingProductsComponent } from './component/home/products-components/trending-products/trending-products.component';
import { UniqueFeatureProductComponent } from './component/home/products-components/unique-feature-product/unique-feature-product.component';
import { ServicesComponent } from './component/home/services/services.component';
import { SubscriptionComponent } from './component/home/subscription/subscription.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { DescriptionComponent } from './component/product-details/description/description.component';
import { RelatedProductsComponent } from './component/product-details/related-products/related-products.component';
import { ThumbnailsComponent } from './component/product-details/thumbnails/thumbnails.component';
import { ProductFilterBarComponent } from './component/shoping/product-filter-bar/product-filter-bar.component';
import { ShopGridComponent } from './component/shoping/shop-grid/shop-grid.component';
import { ShopComponent } from './component/shoping/shop/shop.component';
import { SideBarFilterComponent } from './component/shoping/side-bar-filter/side-bar-filter.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductCardGridComponent } from './component/utilities/product-card-grid/product-card-grid.component';
import { ProductCardListComponent } from './component/utilities/product-card-list/product-card-list.component';
import { ProductCardComponent } from './component/utilities/product-card/product-card.component';
import { RelatedProductsCardComponent } from './component/utilities/related-products-card/related-products-card.component';
import { SmallProductCardComponent } from './component/utilities/small-product-card/small-product-card.component';
import { CartComponent } from './page/cart/cart.component';
import { OrderCompletedComponent } from './page/order-completed/order-completed.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { ShopingComponent } from './page/shoping/shoping.component';
import { StarRatingModule,StarRatingConfigService } from 'angular-star-rating';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeadingBarComponent,
    HeroSectionComponent,
    LeatestBlogComponent,
    DiscountItemComponent,
    FeaturedProductsComponent,
    LeatestProductsComponent,
    TopCategoriesComponent,
    TrendingProductsComponent,
    UniqueFeatureProductComponent,
    ServicesComponent,
    SubscriptionComponent,
    NavBarComponent,
    DescriptionComponent,
    RelatedProductsComponent,
    ThumbnailsComponent,
    ProductFilterBarComponent,
    ShopComponent,
    ShopGridComponent,
    SideBarFilterComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    ProductCardGridComponent,
    ProductCardListComponent,
    RelatedProductsCardComponent,
    SmallProductCardComponent,
    CartComponent,
    HomeComponent,
    OrderCompletedComponent,
    ProductDetailsComponent,
    ShopingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(routes) 
  ],
  providers: [StarRatingConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
