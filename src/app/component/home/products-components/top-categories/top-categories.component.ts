import { Component } from '@angular/core';
import myData  from '../../../../../assets/mokeProduct.json'

@Component({
  selector: 'app-top-categories',

  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.scss'
})
export class TopCategoriesComponent {
  products = myData

}
