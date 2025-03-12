import { Component } from '@angular/core';
import { ProductCardComponent } from "../utilities/product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leatest-products',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './leatest-products.component.html',
  styleUrl: './leatest-products.component.scss'
})
export class LeatestProductsComponent {
  products = [
    {
      imageSrc:'/assets/leatest-products/image 3 (3).png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'

    },
    {
      imageSrc:'/assets/leatest-products/image 9.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 15.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 23.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 28.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 30.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 31.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 32 (1).png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1164.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1165.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1166.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1168.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1169.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1170.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1171.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
    {
      imageSrc:'/assets/leatest-products/image 1173.png',
      title:'Cantilever Chair',
      currentPrice:'$42.00',
      originalPrice:"$65.00",
      isFeatured:true,
      code:'Y523201'
    },
  ]
}
