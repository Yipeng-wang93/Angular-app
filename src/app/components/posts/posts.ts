import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, IPost } from '../../services/post';

/**
 * Posts component
 * Displays a list of posts fetched from an external API
 * Demonstrates Angular service consumption and HTTP client usage
 */
@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit {
  // Array to store fetched posts
  posts: IPost[] = [];
  
  // Loading state indicator
  isLoading = true;
  
  // Error message storage
  errorMessage = '';

  /**
   * Constructor with dependency injection
   * Injects the Post service to access API methods
   */
  constructor(private postService: Post) {}

  /**
   * Angular lifecycle hook - called once after component initialization
   * Perfect place for API calls and data fetching
   */
  ngOnInit(): void {
    this.fetchPosts();
  }

  /**
   * Fetches posts from the API using the Post service
   * Subscribes to the Observable returned by the service
   * Handles success and error cases
   */
  fetchPosts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.postService.getPosts().subscribe({
      // Success handler - called when API returns data
      next: (data) => {
        // Limit to first 10 posts for better UI
        this.posts = data.slice(0, 10);
        this.isLoading = false;
      },
      // Error handler - called if API request fails
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
        console.error('Error fetching posts:', error);
      },
      // Complete handler - called when Observable completes
      complete: () => {
        console.log('Posts fetch completed');
      }
    });
  }

  /**
   * TrackBy function for *ngFor optimization
   * Helps Angular identify which items have changed
   * @param index - index of the item in the array
   * @param post - the post object
   * @returns unique identifier for the post
   */
  trackByPostId(index: number, post: IPost): number {
    return post.id;
  }
}
