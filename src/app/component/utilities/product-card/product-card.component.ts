import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() code?: string;
  @Input() currentPrice: string = '';
  @Input() originalPrice?: string;
  @Input() isFeatured: boolean = false;
}
