import React from 'react';
import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left - Logo + Brand Name */}
          <div className="flex items-center space-x-3">
            {/* Logo SVG */}
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 14L21 3m0 0v6m0-6h-6"></path>
              <path d="M14 10L3 21m0 0v-6m0 6h6"></path>
            </svg>

            {/* Brand Name */}
            <Link
              to="/"
              className="text-2xl font-extrabold text-white hover:text-gray-100 transition duration-200"
            >
              URLite
            </Link>
          </div>

          {/* Right - Auth Button */}
          <div className="flex space-x-4 items-center">
            <Link
              to="/auth"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
