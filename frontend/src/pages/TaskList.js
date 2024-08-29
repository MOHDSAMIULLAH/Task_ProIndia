// pages/TaskList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/taskSlice';
import Task from '../components/Task';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Task List</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  </div>
  );
};

export default TaskList;
