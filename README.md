# YipengAssignmentApp - Angular 20 Application

## Description
This app is a comprehensive web application built with Angular 20 that demonstrates modern web development practices including client-side routing, RESTful API consumption, and reactive form handling.

## Features
- **Client-Side Navigation**: Seamless navigation between pages using Angular Router
- **API Integration**: Fetches and displays data from JSONPlaceholder API
- **Reactive Forms**: Advanced form handling with validation
- **Responsive Design**: Mobile-friendly interface using Bootstrap 5
- **Modern Angular**: Built with Angular 20 standalone components

## Technologies Used
- Angular 20
- TypeScript
- Bootstrap 5
- RxJS
- HttpClient for API calls
- Reactive Forms

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Angular CLI 20

### Steps
1. Clone the repository:
```bash
git clone https://github.com/2025-Fall-ITE-5425-0TA/angular-assignment-Yipeng-wang93.git
cd yipeng-assignment-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
ng serve
```

4. Navigate to `http://localhost:4200`

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── navigation/       # Navigation bar component
│   │   ├── home/            # Landing page
│   │   ├── posts/           # API data display
│   │   ├── feedback-form/   # Reactive form
│   │   ├── footer/          # Footer component
│   │   └── page-not-found/  # 404 page
│   ├── services/
│   │   └── post.ts          # API service
│   ├── app.config.ts        # Application configuration
│   ├── app.routes.ts        # Routing configuration
│   └── app.ts               # Root component
└── styles.css               # Global styles
```

## API Usage
This application consumes the JSONPlaceholder API:
- **Endpoint**: https://jsonplaceholder.typicode.com/posts
- **Method**: GET
- **Purpose**: Demonstrates HTTP client usage and API integration

## Form Validation
The feedback form includes the following validations:
- **Student Name**: Required, minimum 3 characters
- **Email**: Required, must be valid email format
- **Course**: Required selection
- **Rating**: Required, must be between 1-5
- **Comments**: Required, minimum 10 characters

## Deployment
Deployed on Vercel: [Your Vercel URL]

## Author
Yipeng Wang
Humber College - IT Solutions Program

## Assignment Context
This project was developed as part of the Web Programming Framework 2 course assignment, demonstrating proficiency in:
- Angular application architecture
- Component-based development
- Service creation and dependency injection
- HTTP client and API integration
- Reactive forms with validation
- Client-side routing

## License
This project is created for educational purposes.