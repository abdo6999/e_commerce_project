import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingBarComponent } from "./component/heading-bar/heading-bar.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { HeroSectionComponent } from "./component/hero-section/hero-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadingBarComponent, NavBarComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e_commerce_project';
}
