# Hidden Heritage

This project aims to preserve and celebrate the rich cultural heritage of Maharashtra by providing a platform to discover untold stories, traditions, and voices.

## Project Structure

The project is divided into two main parts:

-   **`client/`**: The frontend application built with React.
-   **`server/`**: The backend API built with Node.js and Express.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js (version 14 or higher)
-   npm or yarn
-   MongoDB instance (local or cloud-hosted)

### Backend Setup (`server/`)

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `server/` directory with the following content:
    ```
    MONGO_URI="your_mongodb_connection_string"
    PORT=5000
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string.
4.  Run the database seeder (optional, for initial data):
    ```bash
    node seed/seed.js
    ```
5.  Start the backend server:
    ```bash
    npm start
    ```
    The server will run on `http://localhost:5000` (or the `PORT` you specified).

### Frontend Setup (`client/`)

1.  Navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The client application will typically open in your browser at `http://localhost:5173`.

## Features

-   Browse heritage sites and their stories.
-   Cultural map to explore sites by location.
-   Contribute your own stories, photos, and vlogs.
-   User authentication (to be implemented).
-   Admin panel for managing content (to be implemented).

## Technologies Used

**Frontend:**
-   React
-   React Router DOM
-   Tailwind CSS
-   Vite

**Backend:**
-   Node.js
-   Express
-   MongoDB (Mongoose)
-   dotenv
-   cors

## API Endpoints

### Heritage Sites (`/api/heritage`)

-   `GET /api/heritage`: Get all heritage sites.
-   `GET /api/heritage/:id`: Get a single heritage site by ID.
-   `POST /api/heritage`: Create a new heritage site.
-   `PUT /api/heritage/:id`: Update an existing heritage site.
-   `DELETE /api/heritage/:id`: Delete a heritage site.

## Contributing

We welcome contributions! Please feel free to submit issues or pull requests. See our `CONTRIBUTING.md` (to be created) for more details.

## License

This project is licensed under the MIT License.
