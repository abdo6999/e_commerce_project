import { Component } from '@angular/core';
import { HeadingBarComponent } from "../../component/heading-bar/heading-bar.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { HeroSectionComponent } from "../../component/hero-section/hero-section.component";
import { FeaturedProductsComponent } from "../../component/featured-products/featured-products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingBarComponent, NavBarComponent, HeroSectionComponent, FeaturedProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
