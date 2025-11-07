import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';


/**
 * Root component of the application
 * Provides the main layout structure with navigation, content area, 
 * and footer
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('yipeng-assignment-app');
}
