import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShopingComponent } from './page/shoping/shoping.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'shopping',component:ShopingComponent},
  {path:'shopping/p',component:ProductDetailsComponent}
];
