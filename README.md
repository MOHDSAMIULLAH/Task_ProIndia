
# Task Management Application

A simple task management application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to register, log in, and manage tasks. The app includes features such as task creation, updating, deleting, and viewing tasks with user-friendly authentication and responsive UI.

## Features

- **User Authentication**: Users can register and log in using their email and password.
- **Task Management**: Authenticated users can create, view, update, and delete tasks.
- **State Management**: The application uses Redux Toolkit for efficient state management.
- **Responsive UI**: Built with React and Tailwind CSS, ensuring a responsive and user-friendly interface.
- **JWT Authentication**: Secure user authentication with JSON Web Tokens (JWT).
- **Form Validation**: Includes form validation on the frontend to ensure data integrity.
- **Error Handling**: Comprehensive error handling with user notifications for various actions.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: For making HTTP requests to the backend API.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing user and task data.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **JWT**: For secure user authentication.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MOHDSAMIULLAH/Task_ProIndia.git
   cd task-management-app
   ```

2. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

1. **MongoDB Connection**: In the `backend/config/db.js` file, configure your MongoDB URI.

2. **JWT Secret**: Create a `.env` file in the `backend/` directory with the following environment variables:

   ```plaintext
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

### Running the Application

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend Development Server:**

   ```bash
   cd frontend
   npm start
   ```

3. **Access the Application:**
   
   Open your browser and go to `http://localhost:3000`.

## API Endpoints

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login a user.
- **GET** `/api/tasks`: Get all tasks for the authenticated user.
- **POST** `/api/tasks`: Create a new task.
- **PUT** `/api/tasks/:id`: Update a task by ID.
- **DELETE** `/api/tasks/:id`: Delete a task by ID.

## Additional Information

- **Redux Toolkit**: Handles state management efficiently with a clean API.
- **JWT**: Provides a secure method for user authentication and session management.
- **Form Validation**: Ensures that user input is validated before being processed.
- **Error Handling**: Provides feedback to users in case of errors or failed actions.

