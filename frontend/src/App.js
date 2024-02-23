import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles.css';

// Define the variable for deployed server link
const SERVER_URL = 'https://mern-todo-app-sx6x.onrender.com';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (title, isFavorite) => { // Modify addTask function to accept isFavorite parameter
    try {
      const response = await axios.post(`${SERVER_URL}/api/tasks`, { title, favorite: isFavorite }); // Pass isFavorite in the request body
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const editTask = (task) => {
    setEditTaskData(task);
  };

  const updateTask = async (id, title, isFavorite) => { // Modify updateTask function to accept isFavorite parameter
    try {
      await axios.patch(`${SERVER_URL}/api/tasks/api/tasks/${id}`, { title, favorite: isFavorite }); // Pass isFavorite in the request body
      const updatedTasks = tasks.map(task => {
        if (task._id === id) {
          return { ...task, title, favorite: isFavorite }; // Update favorite status
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditTaskData(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  
  const toggleTaskCompletion = async (id) => {
    try {
      const updatedTasks = tasks.map(task => {
        if (task._id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      setTasks(updatedTasks);
      await axios.patch(`${SERVER_URL}/api/tasks/${id}`, { completed: updatedTasks.find(task => task._id === id).completed });
    } catch (error) {
      console.error('Error updating task completion:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${SERVER_URL}/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      const updatedTasks = tasks.map(task => {
        if (task._id === id) {
          return { ...task, favorite: !task.favorite };
        }
        return task;
      });
      setTasks(updatedTasks);
      await axios.patch(`${SERVER_URL}/api/tasks/${id}`, { favorite: updatedTasks.find(task => task._id === id).favorite });
    } catch (error) {
      console.error('Error updating task favorite status:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl text-white font-red text-center shadow-md p-4 mb-4">To-Do List</h1>
      <TaskForm addTask={addTask} editTaskData={editTaskData} updateTask={updateTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} editTask={editTask} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
