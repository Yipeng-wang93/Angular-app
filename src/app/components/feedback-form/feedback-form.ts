import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

/**
 * Feedback Form component
 * Implements a reactive form with validation for collecting student feedback
 * Demonstrates Angular reactive forms, validation, and form handling
 */
@Component({
  selector: 'app-feedback-form',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './feedback-form.html',
  styleUrl: './feedback-form.css'
})
export class FeedbackForm {
  // Flag to track form submission state
  submitted = false;
  
  // Flag to show success message after submission
  showSuccessMessage = false;

  // Flag to indicate submission in progress (used to disable submit button)
  isSubmitting = false;

    /**
   * Constructor with HttpClient injection
   * HttpClient is used to send POST requests to the API
   */
  constructor(private http: HttpClient) {}

  /**
   * Reactive Form Group
   * Defines the form structure with controls and validators
   * Each FormControl represents an input field with validation rules
   */
  feedbackForm = new FormGroup({
    // Student name field - required, minimum 3 characters
    studentName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    
    // Email field - required, must be valid email format
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    
    // Course field - required
    course: new FormControl('', [
      Validators.required
    ]),
    
    // Rating field - required, must be a number between 1-5
    rating: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ]),
    
    // Comments field - required, minimum 10 characters
    comments: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  /**
   * Form submission handler
   * Called when user clicks submit button
   * Validates form, sends data to API, and processes data
   */
  onSubmit(): void {
    this.submitted = true;

    // Check if form is valid before processing
    if (this.feedbackForm.valid) {
      // Set submitting flag to true (can be used to disable submit button)
      this.isSubmitting = true;

      // Log the form data to browser console
      console.log('Feedback Form Submitted:', this.feedbackForm.value);
      
      // Prepare data for API submission
      const feedbackData = {
        title: `Feedback from ${this.feedbackForm.value.studentName}`,
        body: `Course: ${this.feedbackForm.value.course}\n` +
              `Email: ${this.feedbackForm.value.email}\n` +
              `Rating: ${this.feedbackForm.value.rating}/5\n` +
              `Comments: ${this.feedbackForm.value.comments}`,
        userId: 1  // Required by JSONPlaceholder API
      };

      // Send POST request to JSONPlaceholder API
      this.http.post('https://jsonplaceholder.typicode.com/posts', feedbackData)
        .subscribe({
          // Success handler - called when API request succeeds
          next: (response) => {
            console.log('API Response:', response);
            console.log('Feedback successfully submitted to API');
            
            // Show success message
            this.showSuccessMessage = true;
            
            // Reset form after successful submission
            this.feedbackForm.reset();
            this.submitted = false;
            this.isSubmitting = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 5000);
          },
          // Error handler - called if API request fails
          error: (error) => {
            console.error('Error submitting feedback:', error);
            this.isSubmitting = false;
            alert('There was an error submitting your feedback. Please try again.');
          },
          // Complete handler - called when observable completes
          complete: () => {
            console.log('Feedback submission process completed');
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }

  /**
   * Helper method to get a form control
   * Makes template code cleaner
   * @param controlName - name of the form control
   * @returns FormControl or null
   */
  getControl(controlName: string) {
    return this.feedbackForm.get(controlName);
  }
}
