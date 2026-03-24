import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [NgOptimizedImage],
  templateUrl: './services.html',
})
export class Services {
  services = [
    {
      icon: '/images/dish.svg',
      name: 'Exelent food',
      text: 'We offer our clients excellent quality services for many years, with the best and delicious food in the city.',
    },
    {
      icon: '/images/pizza.svg',
      name: 'Fast food',
      text: 'We offer our clients excellent quality services for many years, with the best and delicious food in the city.',
    },
    {
      icon: '/images/truck.svg',
      name: 'Delivery',
      text: 'We offer our clients excellent quality services for many years, with the best and delicious food in the city.',
    },
  ];
}
