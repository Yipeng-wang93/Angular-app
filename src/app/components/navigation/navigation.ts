import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Navigation component
 * Provides the main navigation menu with links to all major pages
 * Uses routerLink for client-side navigation and routerLinkActive for highlighting active links
 */
@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  // Component class remains simple as all navigation logic is handled by Angular Router
}
