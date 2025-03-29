import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-product-card',
  templateUrl: './small-product-card.component.html',
  styleUrl: './small-product-card.component.scss'
})
export class SmallProductCardComponent {
  @Input() imageSrc: string = '';
  @Input() productName: string = '';
  @Input() productPrice: string = '';
}
