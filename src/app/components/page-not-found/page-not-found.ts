import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Page Not Found component
 * Displayed when user navigates to an undefined route
 */
@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {
}
