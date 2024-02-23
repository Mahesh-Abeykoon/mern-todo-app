> ## 🚀 To-Do List Application
> 
### This is a basic web-based To-Do List application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to manage tasks by adding, editing, and deleting them. Additionally, users can mark tasks as completed and filter tasks based on their status.

### Table of Contents

```  console 
Introduction
Features
Prerequisites
Installation
Usage
API Endpoints
Contributing
License
```

> ## Introduction
This project aims to evaluate skills in front-end and back-end development, database integration, and overall problem-solving abilities. It provides a user-friendly interface for managing tasks efficiently.

### 🔍 Features
``` console
Display a list of tasks with the ability to add, edit, and delete tasks.
Implement task filtering options (e.g., All, Active, Completed).
Provide a checkbox to mark tasks as completed.
Include a clear button to remove completed tasks.
Implement validation and error handling for API requests.
Secure the API endpoints and protect against common security vulnerabilitie
```
### Prerequisites
### Before setting up the project, ensure you have the following installed:

```jsx harmony
Node.js and npm (Node Package Manager)
MongoDB
Git
```

👨‍💻 Installation
### 1. Clone the repository to your local machine:

```jsx harmony
 git clone https://github.com/Mahesh-Abeykoon/mern-todo-app.git

```
### 2. Navigate to the project directory:
```jsx harmony
cd mern-todo-app
```

### 3. Install dependencies for both the server and client:
```jsx harmony
npm install
cd frontend
npm install
```
### 4. Create a .env file in the project root directory and add the following environment variables:
```jsx harmony
MONGODB_URI=your_mongodb_connection_string
PORT=5001
```

> ### Replace your_mongodb_connection_string with your MongoDB connection string.

### 🔐 Usage

#### 1. Start the Node.js server:
```jsx harmony
cd backend
npm start
```
#### 2. Start the React development server (in another terminal):
```jsx harmony
cd frontend
npm start
```

#### 3. Open your web browser and navigate to http://localhost:3000 to view the application.

### 🛡️ API Endpoints
```jsx harmony
GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Create a new task.
PATCH /api/tasks/:id: Update an existing task.
DELETE /api/tasks/:id: Delete a task.
```

### Contributing
#### Contributions are welcome! Feel free to fork the repository and submit pull requests to suggest improvements or new features.

### License
#### This project is licensed under the MIT License.
