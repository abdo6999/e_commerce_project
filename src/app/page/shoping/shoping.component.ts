import { Component } from '@angular/core';
import { HeadingBarComponent } from "../../component/heading-bar/heading-bar.component";
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { ShopComponent } from "../../component/shoping/shop/shop.component";

@Component({
  selector: 'app-shoping',
  standalone: true,
  imports: [HeadingBarComponent, NavBarComponent, FooterComponent, ShopComponent],
  templateUrl: './shoping.component.html',
  styleUrl: './shoping.component.scss'
})
export class ShopingComponent {

}
