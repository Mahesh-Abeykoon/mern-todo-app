import React, { useState } from 'react';

function TaskList({ tasks, toggleTaskCompletion, deleteTask, editTask, toggleFavorite }) {
  const [showFavoriteTasks, setShowFavoriteTasks] = useState(false); // State to toggle display of favorite tasks
  const [showCompletedTasks, setShowCompletedTasks] = useState(false); // State to toggle display of done tasks

  // Function to toggle display of favorite tasks
  const toggleShowFavoriteTasks = () => {
    setShowFavoriteTasks(!showFavoriteTasks);
    setShowCompletedTasks(false); // Hide done tasks when showing favorite tasks
  };

  // Function to toggle display of done tasks
  const toggleShowCompletedTasks = () => {
    setShowCompletedTasks(!showCompletedTasks);
    setShowFavoriteTasks(false); // Hide favorite tasks when showing done tasks
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
          Favorite Tasks
          <button onClick={toggleShowFavoriteTasks}>
            {showFavoriteTasks ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          }
          </button>
        </h2>
        {showFavoriteTasks && (
          <>
            {tasks.filter(task => task.favorite).length === 0 ? (
              <p className="text-gray-500">No favorite tasks yet.</p>
            ) : (
              <ul>
                {tasks.map(task => (
                  <React.Fragment key={task._id}>
                    {task.favorite && (
                      <li className="bg-white rounded-md shadow-md p-4 mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className={task.completed ? 'line-through text-gray-500' : 'text-black'}>{task.title}</span>
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </>
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">
          Completed Tasks
          <button onClick={toggleShowCompletedTasks}>
            {showCompletedTasks ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        
        
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            }
          </button>
        </h2>
        {showCompletedTasks && (
          <>
            {tasks.filter(task => task.completed && !task.favorite).length === 0 ? (
              <p className="text-gray-500">No tasks are done yet.</p>
            ) : (
              <ul>
                {tasks.map(task => (
                  <React.Fragment key={task._id}>
                    {task.completed && !task.favorite && (
                      <li className="bg-white rounded-md shadow-md p-4 mb-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="line-through text-gray-500">{task.title}</span>
                        </div>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </>
        )}
      </div>

      <div>
      <h2 className="text-lg font-semibold mb-2 flex items-center justify-between">Task Lists</h2>
        <ul>
          {tasks.map(task => (
            <li key={task._id} className="bg-white rounded-md shadow-md p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center">
              <button onClick={() => toggleTaskCompletion(task._id)} 
                className={"text-green-500 hover:text-green-700 focus:outline-none"}>
                {/* className={`text-green-500 hover:text-green-700 focus:outline-none ${task.completed ? 'opacity-50' : ''}`}> */}
                  {
                    task.completed ?
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                     <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                   </svg> :
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                 </svg>
                 
                  }
               


                </button>
                <span className={task.completed ? 'line-through text-gray-500' : 'text-black'}>{task.title}</span>
                <span className="ml-4 text-gray-400 text-sm">{new Date(task.dateAdded).toLocaleDateString()}</span>
              </div>
              <div>
              <button onClick={() => toggleFavorite(task._id)} className="text-red-500 hover:text-red-700 mr-2 focus:outline-none">
                  {task.favorite ? 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                 </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

              }
                </button>
                <button onClick={() => editTask(task)} className="text-blue-500 hover:text-blue-700 mr-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </button>
                <button onClick={() => deleteTask(task._id)} className="text-red-500 hover:text-red-700 focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
