# React Beer Challenge - Frontend

This is the frontend of the **React Beer Challenge** project. It is built with React and Vite to provide a fast and responsive user interface.

## Features

- Displays a list of beer products with stock and pricing information.
- Fetches real-time data from the backend.
- Modular React components for scalability.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: A fast build tool for modern web projects.
- **ESLint**: For maintaining code quality and consistency.

## How to Run the Frontend

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (or **yarn**)

### Steps

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Create the `.env` file based on the template:

   ```bash
   cp .env.template .env
   ```

   You can modify the `VITE_API_URL` in the `.env` file if your backend is running on a different URL.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Folder Structure

```
frontend/
├── public/        # Static assets (e.g., images, icons)
├── src/           # React components and logic
│   ├── assets/     # Dynamic assets (e.g., images, icons)
│   ├── components/ # Reusable React components
│   ├── pages/      # Page-level components
│   ├── App.jsx     # Main React component
│   └── main.jsx    # Entry point for the React app
├── .env.template  # Environment variable template
├── .env           # Environment variables (ignored by Git)
├── index.html     # HTML template for the app
├── vite.config.js # Vite configuration file
└── README.md      # Frontend README
```

## Environment Variables

The `.env` file is used to configure environment-specific variables. The following variable is required:

- `VITE_API_URL`: The base URL for the backend API (e.g., `http://localhost:8080/api`).

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
