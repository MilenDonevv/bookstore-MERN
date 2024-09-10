# MERN Bookstore App

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing a collection of books. It covers everything from setting up a Node.js server and connecting it to MongoDB, to creating a user-friendly React-based frontend.

## Features

- **Create, Read, Update, Delete (CRUD)** operations for books
- RESTful API with Express and MongoDB
- Frontend built using React with React Router DOM for Single Page Application (SPA)
- UI and User Experience (UX) improvements using Tailwind CSS and modals
- Alerts and feedback to enhance user interaction

---

## Key Steps and Code Walkthrough

### Backend (Node.js, Express, MongoDB)

1. **Create Node.js project from scratch**  
   Set up a new Node.js project and initialize it with essential packages like Express.

2. **Create our first Http Route**  
   Create a basic HTTP route to test the API server.

3. **Add MongoDB and mongoose to Node.js**  
   Set up MongoDB and integrate mongoose for database interaction.

4. **Create Book model with mongoose**  
   Define a `Book` schema using mongoose to structure book data.

5. **Save a new Book with mongoose**  
   Create a route to save a new book to the database.

6. **Get All Books with mongoose**  
   Create a route to fetch all books from the database.

7. **Get One Book by id with mongoose**  
   Retrieve a single book by its ID from the database.

8. **Update a Book with mongoose**  
   Implement the logic to update a book's details by its ID.

9. **Delete a Book with mongoose**  
   Create a route to delete a book from the database.

10. **Refactor Node.js with Express Router**  
    Refactor the API routes using Express Router for cleaner code organization.

11. **CORS policy in Node.js and Express.js**  
    Configure Cross-Origin Resource Sharing (CORS) to allow communication between the backend and frontend.

---

### Frontend (React, Vite, Tailwind CSS)

12. **Create React project with Vite and Tailwind CSS**  
    Set up a new React project using Vite and integrate Tailwind CSS for styling.

13. **SPA and Add react-router-dom**  
    Implement React Router DOM to create a Single Page Application (SPA) with multiple views.

14. **Show Books List in React**  
    Display a list of books fetched from the backend on the React frontend.

15. **Show Book Details in React**  
    Implement a view to show detailed information about a single book.

16. **Create Book in React**  
    Add functionality to create a new book from the React frontend.

17. **Edit Book in React**  
    Implement a form to edit and update an existing book.

18. **Delete Book in React**  
    Add a button to delete a book from the frontend.

19. **Show Books List as Card**  
    Refactor the books list to display each book as a card component.

20. **Make Book Card a Single Component**  
    Modularize the book display by creating a reusable `BookCard` component.

21. **Add Book Modal**  
    Implement a modal for adding or editing books for a better user experience.

22. **Improve User Experience (UX) with Beautiful Alert**  
    Add visual feedback such as alerts to improve the user experience when performing actions.

---

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  
- **Frontend:**
  - React.js
  - React Router DOM
  - Vite (as the build tool)
  - Tailwind CSS (for styling)
  
- **Other Tools:**
  - Axios for HTTP requests
  - CORS for cross-origin requests
  - JavaScript (ES6+)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MilenDonevv/bookstore-MERN.git
