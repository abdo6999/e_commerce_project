import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() imageSrc: string = '';
  @Input() productName: string = '';
  @Input() code?: string;
  @Input() currentPrice: string = '';
  @Input() originalPrice?: string;
  @Input() isFeatured: boolean = false;
}
