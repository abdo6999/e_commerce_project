import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShopingComponent } from './page/shoping/shoping.component';
import { ProductDetailsComponent } from './page/product-details/product-details.component';
import { CartComponent } from './page/cart/cart.component';
import { OrderCompletedComponent } from './page/order-completed/order-completed.component';
import { LoginComponent } from './component/auth/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'shopping', component: ShopingComponent },
  { path: 'shopping/p/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-completed', component: OrderCompletedComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];

