import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editTaskData, updateTask }) {
  // State hooks for task title and favorite status
  const [title, setTitle] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  // Set form fields if editing task
  useEffect(() => {
    if (editTaskData) {
      setTitle(editTaskData.title);
      setIsFavorite(editTaskData.favorite);
    }
  }, [editTaskData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (editTaskData) {
      updateTask(editTaskData._id, title, isFavorite);
    } else {
      addTask(title, isFavorite);
    }
    setTitle('');
    setIsFavorite(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8  flex items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2"
      />
      <button type="submit" className="bg-blue-400 text-white py-2 px-4 mb-4 rounded-md hover:bg-blue-500 transition duration-300">
        {editTaskData ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
       : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        }
      </button>
    </form>
  );
}

export default TaskForm;
