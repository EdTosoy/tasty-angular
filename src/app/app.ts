import { Component, inject, OnInit, signal } from '@angular/core';
import { AppService } from './app.service';
import { About, Contact, Footer, Header, Hero, Menu, MobileApp, Services } from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, About, Services, Menu, MobileApp, Contact, Footer],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('tasty-angular');
  appService = inject(AppService);
  ngOnInit(): void {
    this.appService.initTheme();
  }
}
