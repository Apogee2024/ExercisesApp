# Apogee Performance

**Apogee Performance** is a full-stack application designed to help users keep track of their personal records (PRs) in various exercises. The app allows users to add, edit, and view their exercise records through a user-friendly interface.

## Features

- **Add Exercise Records:** Users can input new exercises along with their PRs.
- **Edit Exercise Records:** Users can update their existing exercise records.
- **View Exercise Records:** Users can see a list of all their exercises and PRs.

## Project Structure

- **Front-end:**
  - `App.jsx`: The main component that sets up routing and state management. It includes the navigation and footer, and it connects the `HomePage`, `AddExercisePage`, and `EditExercisePage` components.
  - `pages/`: Contains the different page components (`HomePage`, `AddExercisePage`, `EditExercisePage`).
  - `components/Navigation.js`: The navigation bar component.
  - `App.css`: Contains the styling for the application.

- **Back-end:**
  - The API is built within the `modelAndController` directory, providing the necessary endpoints for managing exercise records.

## Demo
make sure to run npm install within both directories before running

start the api within the modelAndController folder using npm start
start the view within the reactApp folder using npm run dev

See the demo pngs to view the app without running!
