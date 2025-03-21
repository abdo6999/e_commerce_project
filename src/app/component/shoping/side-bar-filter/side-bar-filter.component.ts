import { Component } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingConfigService } from 'angular-star-rating';

@Component({
  selector: 'app-side-bar-filter',
  standalone: true,
  imports: [StarRatingModule],
  providers:[StarRatingConfigService],
  templateUrl: './side-bar-filter.component.html',
  styleUrl: './side-bar-filter.component.scss'
})
export class SideBarFilterComponent {

}
