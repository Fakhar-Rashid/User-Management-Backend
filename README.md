
# User Management Backend

[![Node.js](https://img.shields.io/badge/node.js-v18.x-green?logo=node.js)](https://nodejs.org/)  [![Express](https://img.shields.io/badge/express-4.x-lightgrey?logo=express)](https://expressjs.com/)  [![MongoDB](https://img.shields.io/badge/mongodb-6.x-green?logo=mongodb)](https://www.mongodb.com/)  [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## Project Overview

This project is a **User Management Backend** built with Node.js, Express, and MongoDB. It demonstrates the use of 25 MongoDB functions for CRUD operations, querying, aggregation, indexing, and more.

The backend exposes RESTful APIs to manage user data including registration, authentication, profile updates, and role management.

---

## Features

- User registration and authentication  
- User profile CRUD operations  
- Role-based access control  
- Password hashing and validation  
- Querying with filters, sorting, and pagination  
- Aggregation pipelines for analytics  
- Indexing for improved query performance  
- Data validation with Mongoose schemas  

---

## MongoDB Functions Demonstrated

- `insertOne()`, `insertMany()`  
- `find()`, `findOne()`  
- `updateOne()`, `updateMany()`  
- `deleteOne()`, `deleteMany()`  
- `countDocuments()`  
- `aggregate()`  
- `distinct()`  
- `createIndex()`  
- `dropIndex()`  
- `bulkWrite()`  
- `replaceOne()`  
- `findOneAndUpdate()`  
- `findOneAndDelete()`  
- `findOneAndReplace()`  
- `watch()` (Change Streams)  
- `estimatedDocumentCount()`  
- `explain()`  

and other common MongoDB collection and database operations.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/user-management-backend.git
   cd user-management-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables:

   Create a `.env` file with the following:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/user_management
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

---

## API Endpoints

| Method | Endpoint             | Description                   |
| ------ | -------------------- | -----------------------------|
| POST   | `/api/users/register`| Register a new user           |
| POST   | `/api/users/login`   | Authenticate a user           |
| GET    | `/api/users`         | Get all users (admin only)    |
| GET    | `/api/users/:id`     | Get user by ID                |
| PUT    | `/api/users/:id`     | Update user by ID             |
| DELETE | `/api/users/:id`     | Delete user by ID             |

---
