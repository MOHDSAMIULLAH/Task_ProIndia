import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/taskSlice';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Your Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
