# Society Management System

Welcome to the Society Management System project! This web-based application helps manage visitor data and events within a society. It allows administrators to efficiently store and sort visitor information, and create events that are visible to all site visitors.

## Features

- **Visitor Management**: 
  - Store and manage data of visitors entering the society.
  - Admin can view and sort visitor data by date, time, block, room, and other criteria.

- **Event Management**:
  - Admin can create new events.
  - All visitors to the site can view the events created by the admin.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**:  Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git, GitHub

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/society-management-system.git
    cd society-management-system
    ```

2. **Install dependencies**
    - For the server:
        ```bash
        cd server
        npm install
        ```
    - For the client:
        ```bash
        cd ../client
        npm install
        ```

3. **Set up the environment variables**
    - Create a `.env` file in the `server` directory and add the following variables:
        ```env
        PORT=your_PORT
        JWT_SECRET=your_jwt_secret
        MONGODB_URI=your_mongodb_uri
        ```
   
   - Create a `.env` file in the `client` directory and add the following variables:
        ```env
        VITE_PORT=your_PORT
        ```

5. **Run the application**
    - Start the backend server:
        ```bash
        cd server
        npm start
        ```
    - Start the frontend server:
        ```bash
        cd ../client
        npm run dev
        ```

## Usage

- **Admin Dashboard**:
  - Log in with admin credentials.
  - View, sort, and manage visitor data.
  - Create new events.

- **Public View**:
  - All society members can view the list of events created by the admin.
  - All the visitors fills the visitors form.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.





