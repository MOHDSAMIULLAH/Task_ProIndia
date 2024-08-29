// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="mb-8">Manage your tasks efficiently with our simple and intuitive task management app.</p>
      <Link to="/tasks" className="bg-blue-600 text-white px-6 py-3 rounded">
        Go to Tasks
      </Link>
    </div>
  );
};

export default Home;
