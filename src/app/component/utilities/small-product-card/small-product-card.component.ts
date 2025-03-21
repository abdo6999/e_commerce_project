import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-product-card',
  standalone: true,
  imports: [],
  templateUrl: './small-product-card.component.html',
  styleUrl: './small-product-card.component.scss'
})
export class SmallProductCardComponent {
  @Input() imageSrc: string = '';
  @Input() productName: string = '';
  @Input() productPrice: string = '';
}
