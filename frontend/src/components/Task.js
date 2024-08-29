// components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/taskSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateTask({ id: task._id, title, description, status }));
    setIsEditing(false);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out">
    {isEditing ? (
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Task Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Task Description"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={handleSave} className="w-full bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600 transition">
          Save
        </button>
      </div>
    ) : (
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <span
          className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
            task.status === 'Done'
              ? 'bg-green-100 text-green-800'
              : task.status === 'In Progress'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {task.status}
        </span>
        <div className="mt-4 flex space-x-3">
          <button
            onClick={() => setIsEditing(true)}
            className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(task._id)}
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    )}
  </div>
  );
};

export default Task;
