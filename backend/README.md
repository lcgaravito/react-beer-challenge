# React Beer Challenge - Backend

This is the backend of the **React Beer Challenge** project. It is built with Node.js and Express to serve dynamic stock and pricing data.

## Features

- Serves product data with dynamic stock and pricing updates.
- Uses ES Modules for modern JavaScript syntax.
- Modular and scalable Express routes.

## Technologies Used

- **Node.js**: For the server-side runtime.
- **Express**: For building RESTful APIs.
- **ES Modules**: For modern JavaScript module syntax.
- **Dynamic Imports**: To load stock and pricing data dynamically.

## How to Run the Backend

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (or **yarn**)

### Steps

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

4. The backend will run on:
   ```
   http://localhost:8080
   ```

## Folder Structure

```
backend/
├── routes/        # Express routes
├── data/          # Dynamic stock and pricing data
├── index.js       # Backend entry point
└── README.md      # Backend README
```

## API Endpoints

- **GET /api/products**: Fetch all products with stock and pricing information.
- **GET /api/products/:id**: Fetch a specific product by ID.
- **GET /api/stock-price/:sku**: Fetch stock and pricing information for a specific SKU.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
