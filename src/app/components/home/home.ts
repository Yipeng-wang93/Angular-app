import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Home component
 * Landing page that provides an overview of the my application
 */
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {
  // Application title displayed in the welcome section
  appTitle = 'Yipeng Assignment App';
  
  // Welcome message for users
  welcomeMessage = 'Welcome to my application! Explore posts and provide feedback.';
}
