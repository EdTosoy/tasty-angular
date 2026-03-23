import { Component, inject, OnInit, signal } from '@angular/core';
import { AppService } from './app.service';
import { Header, Hero } from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('tasty-angular');
  appService = inject(AppService);
  ngOnInit(): void {
    this.appService.initTheme();
  }
}
