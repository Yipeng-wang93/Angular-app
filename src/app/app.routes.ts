// This routes configuration maps URL paths to components. 
// The empty path ('') is the home page, and '**' catches all 
// unmatched routes and redirects to the not-found page.

import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Posts } from './components/posts/posts';
import { FeedbackForm } from './components/feedback-form/feedback-form';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home - Student Portal' },
  { path: 'posts', component: Posts, title: 'Posts - Student Portal' },
  { path: 'feedback', component: FeedbackForm, title: 'Feedback - Student Portal' },
  { path: 'page-not-found', component: PageNotFound, title: 'Page Not Found' },
  { path: '**', redirectTo: 'page-not-found' }
];
