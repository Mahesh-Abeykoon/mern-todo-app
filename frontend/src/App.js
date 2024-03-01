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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/tasks`);
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (title) => {  //addTask function
    try {
      const response = await axios.post(`${SERVER_URL}/api/tasks`, { title});
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const editTask = (task) => {
    setEditTaskData(task);
  };

  const updateTask = async (id, title) => { //updateTask function
    try {
      await axios.patch(`${SERVER_URL}/api/tasks/${id}`, { title });
      const updatedTasks = tasks.map(task => {
        if (task._id === id) {
          return { ...task, title };
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditTaskData(null);
    } catch (error) {
      console.error('Error updating task:', error);
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

 const toggleTaskCompletion = async (id) => {  //Compelted Tasks
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

  const toggleFavorite = async (id) => {  //Favourites Tasks
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
    <div className="container mx-auto mt-8 px-4 ">
      <div className="text-5xl font-sans font-medium tracking-wide text-center shadow-md p-4 mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">To-Do List</span>
      </div>      
      {/* <h1 className="font-sans font-medium tracking-wide text-4xl text-center shadow-md p-4 mb-4">To-Do List</h1> */}
      <TaskForm serverUrl={SERVER_URL} addTask={addTask} editTaskData={editTaskData} updateTask={updateTask} />
      {loading ? (
        <div className="text-4xl font-sans text-center"> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-800">Loading tasks! Please wait...</span>
        </div> 
      ) : (
        <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} editTask={editTask} toggleFavorite={toggleFavorite} />
      )}    
    </div>
  );
}

export default App;
