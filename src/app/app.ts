import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('tasty-angular');
  appService = inject(AppService);
  ngOnInit(): void {
    this.appService.initTheme();
  }
}
