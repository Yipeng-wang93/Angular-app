import { Component } from '@angular/core';

/**
 * Footer component
 * Displays application footer with copyright information
 */
@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();
}
