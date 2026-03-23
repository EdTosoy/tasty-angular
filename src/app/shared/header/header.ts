import { Component, computed, inject } from '@angular/core';
import { LucideAngularModule, Menu, Moon, Sun, X } from 'lucide-angular';
import { AppService } from '../../app.service';

interface NavItem {
  id: string;
  name: string;
}

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  appService = inject(AppService);

  readonly sunIcon = Sun;
  readonly moonIcon = Moon;
  readonly menuIcon = Menu;
  readonly xIcon = X;

  themeIcon = computed(() => (this.appService.darkMode() ? this.sunIcon : this.moonIcon));
  hamburgerIcon = computed(() => (this.appService.darkMode() ? this.xIcon : this.menuIcon));

  nav: NavItem[] = [
    {
      id: 'home',
      name: 'Home',
    },
    {
      id: 'about',
      name: 'About',
    },
    {
      id: 'services',
      name: 'Services',
    },
    {
      id: 'menu',
      name: 'Menu',
    },
    {
      id: 'contact',
      name: 'Contact Us',
    },
  ];

  handleMobileNavClick(): void {
    this.appService.closeMenu();
  }
}
