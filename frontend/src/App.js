// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './pages/TaskList';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import Home from './pages/Home';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/tasks"
          element={token ?  <>
            <TaskForm />
            <TaskList />
          </> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/tasks" />} />
      </Routes>
    </Router>
  );
}

export default App;
