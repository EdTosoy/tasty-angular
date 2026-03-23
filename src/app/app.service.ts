import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  darkMode = signal<boolean>(false);
  openMenu = signal<boolean>(false);

  toggleDarkMode(): void {
    this.darkMode.update((prev) => !prev);
    const isDark = this.darkMode();
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  initTheme(): void {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    this.darkMode.set(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }

  toggleMenu(): void {
    this.openMenu.update((prev) => !prev);
  }

  closeMenu(): void {
    this.openMenu.set(false);
  }
}
