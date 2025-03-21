import {  } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingConfigService } from 'angular-star-rating';

@Component({
  selector: 'app-related-products-card',
  standalone: true,
  imports: [StarRatingModule],
  providers:[StarRatingConfigService],
  templateUrl: './related-products-card.component.html',
  styleUrl: './related-products-card.component.scss'
})
export class RelatedProductsCardComponent {
  @Input() image!:string;
  @Input() title!:string;
  @Input() rating!:number;
  @Input() price!:number;

}
