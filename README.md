# 🍺 React Beer Challenge

This is a full-stack web application designed to showcase a list of beer products with dynamic stock and pricing information. It consists of two main parts:

- **Frontend**: A React-based user interface built with Vite.
- **Backend**: A Node.js server with Express that dynamically serves stock and pricing data.

## Desktop Screenshots

![Product Listing Page Desktop](https://raw.githubusercontent.com/lcgaravito/react-beer-challenge/refs/heads/main/screenshots/PLP-desktop-screenshot.png?raw=true "Product Listing Page Desktop")

![Product Details Page Desktop](https://raw.githubusercontent.com/lcgaravito/react-beer-challenge/refs/heads/main/screenshots/PDP-desktop-screenshot.png?raw=true "Product Details Page Desktop")

## Mobile Screenshots

<div style="display: flex; flex-wrap: wrap;">
   <img src="https://raw.githubusercontent.com/lcgaravito/react-beer-challenge/refs/heads/main/screenshots/PLP-mobile-screenshot.png?raw=true" alt="Product Listing Page Mobile" width="300" height="auto">
   <img src="https://raw.githubusercontent.com/lcgaravito/react-beer-challenge/refs/heads/main/screenshots/PDP-mobile-screenshot.png?raw=true" alt="Product Details Page Mobile" width="300" height="auto">
</div>

## Project Structure

```
react-beer-challenge/
├── backend/       # Backend code (Node.js + Express)
├── frontend/      # Frontend code (React + Vite)
└── README.md      # Main repository README
```

## Features

- Dynamic stock and pricing updates.
- Modular and scalable architecture.
- Built with modern web technologies.

## How to Run the Project

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (or **yarn**)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/lcgaravito/react-beer-challenge.git
   cd react-beer-challenge
   ```

2. Set up the backend:

   ```bash
   cd backend
   npm install
   npm start
   ```

3. Set up the frontend:

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. Access the application:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:8080`

## Technologies Used

- **Frontend**: React, Vite, ESLint
- **Backend**: Node.js, Express, ES Modules
- **Other Tools**: CORS, Path

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
