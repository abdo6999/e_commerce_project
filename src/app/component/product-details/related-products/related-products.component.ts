import { Component } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingConfigService } from 'angular-star-rating';
import { RelatedProductsCardComponent } from "../../utilities/related-products-card/related-products-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [StarRatingModule, RelatedProductsCardComponent,CommonModule],
  providers:[StarRatingConfigService],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {
  relatedProducts = [
    {
      title: "Men's Fashion Wear",
      image: "assets/imgs/image 19.png",
      rating: 4.5,
      price: 43.00
    },
    {
      title: "Women's Fashion",
      image: "assets/imgs/image 20.png",
      rating: 5,
      price: 67.00
    },
    {
      title: "Wok Dummy Fashion",
      image: "assets/imgs/image 30.png",
      rating: 4,
      price: 67.00
    },
    {
      title: "Top Wall Digital Clock",
      image: "assets/imgs/image 28.png",
      rating: 3.5,
      price: 51.00
    }
  ];
}
