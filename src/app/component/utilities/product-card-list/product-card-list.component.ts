import { Component } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingConfigService } from 'angular-star-rating';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [StarRatingModule],
  providers:[StarRatingConfigService],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss'
})
export class ProductCardListComponent {

}
