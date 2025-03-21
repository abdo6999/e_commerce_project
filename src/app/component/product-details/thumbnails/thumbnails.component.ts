import { Component } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingConfigService } from 'angular-star-rating';

@Component({
  selector: 'app-thumbnails',
  standalone: true,
  imports: [StarRatingModule],
  providers:[StarRatingConfigService],
  templateUrl: './thumbnails.component.html',
  styleUrl: './thumbnails.component.scss'
})
export class ThumbnailsComponent {

}
