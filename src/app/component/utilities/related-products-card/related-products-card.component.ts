import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related-products-card',
  templateUrl: './related-products-card.component.html',
  styleUrl: './related-products-card.component.scss'
})
export class RelatedProductsCardComponent {
  @Input() image!:string;
  @Input() title!:string;
  @Input() rating!:number;
  @Input() price!:number;

}
