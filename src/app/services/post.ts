// This service encapsulates all HTTP logic for fetching posts. 
// It uses Angular's HttpClient to make GET requests, implements 
// retry logic for failed requests, and provides comprehensive 
// error handling. The service is marked with 
// @Injectable({ providedIn: 'root' }), making it a singleton 
// available throughout the application.


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**
 * Interface defining the structure of a Post object
 * This matches the data structure returned from JSONPlaceholder API
 */
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Post Service
 * Handles all HTTP requests related to posts
 * Uses JSONPlaceholder API as a public data source for demonstration
 */
@Injectable({
  providedIn: 'root'
})
export class Post {
  // API endpoint for fetching posts
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  /**
   * Fetches all posts from the API
   * @returns Observable<IPost[]> - Stream of post data
   * Uses retry(2) to attempt failed requests twice before erroring
   * Implements error handling with catchError
   */
  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.apiUrl)
      .pipe(
        retry(2), // Retry failed requests up to 2 times
        catchError(this.handleError) // Handle any errors
      );
  }

  /**
   * Error handler for HTTP requests
   * Logs error details and returns user-friendly error message
   * @param error - HTTP error response
   * @returns Observable that errors with descriptive message
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error('Failed to fetch posts. Please try again later.'));
  }
}
