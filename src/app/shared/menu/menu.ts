import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ShoppingCart } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-menu',
  imports: [NgOptimizedImage, LucideAngularModule],
  templateUrl: './menu.html',
})
export class Menu {
  menu = [
    {
      image: '/images/plate1.png',
      name: 'Barbecue salad',
      text: 'Delicious dish',
      price: '22.00',
    },
    {
      image: '/images/plate2.png',
      name: 'Salad with fish',
      text: 'Delicious dish',
      price: '12.00',
    },
    {
      image: '/images/plate3.png',
      name: 'Spinach salad',
      text: 'Delicious dish',
      price: '9.50',
    },
  ];

  cartIcon = ShoppingCart;
}
