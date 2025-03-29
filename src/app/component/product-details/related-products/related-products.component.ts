import { Component } from '@angular/core';

@Component({
  selector: 'app-related-products',
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
