// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/">Task Manager</Link>
        </h1>
        <div>
          <Link to="/home" className="px-4 hover:underline">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/tasks" className="px-4 hover:underline">
                Tasks
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 hover:underline">
                Login
              </Link>
              <Link to="/register" className="px-4 hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
