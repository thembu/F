import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar

  // Handle navigation and close the sidebar
  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false); // Close sidebar after navigation
  };

  return (
    <div className="navbar w-full bg-navbarblack p-4 font-professional shadow-lg">
      {/* Navbar Content */}
      <div className="flex justify-between items-center">
        {/* Logo or Title */}
        <div
          className="text-blue-500 text-lg font-bold cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          TTS
        </div>

        {/* Home link visible on small screens */}
        <div className="sm:hidden text-blue-500 text-sm cursor-pointer hover:text-white" onClick={() => handleNavigation('/')}>
          Home
        </div>

        {/* Sidebar Toggle Button */}
        <button
          className="sm:hidden text-blue-500 focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={sidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-8 text-blue-500">
          <li className="cursor-pointer hover:text-white" onClick={() => handleNavigation('/')}>
            Home
          </li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleNavigation('/about')}>
            About Us
          </li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleNavigation('/service')}>
            Services
          </li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleNavigation('/pricing')}>
            Pricing
          </li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleNavigation('/faqs')}>
            FAQs
          </li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleNavigation('/contact')}>
            Contact Us
          </li>
          <li
            className="cursor-pointer text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors"
            onClick={() => handleNavigation('/login')}
          >
            Log In
          </li>
          <li
            className="cursor-pointer text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors"
            onClick={() => handleNavigation('/signup')}
          >
            Sign Up
          </li>
        </ul>
      </div>

      {/* Sidebar (Visible on small screens when open) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
          <div className="w-64 h-full bg-navbarblack shadow-lg">
            <ul className="space-y-4 p-4 text-blue-500">
              <li
                className="cursor-pointer hover:text-white"
                onClick={() => handleNavigation('/about')}
              >
                About Us
              </li>
              <li
                className="cursor-pointer hover:text-white"
                onClick={() => handleNavigation('/service')}
              >
                Services
              </li>
              <li
                className="cursor-pointer hover:text-white"
                onClick={() => handleNavigation('/pricing')}
              >
                Pricing
              </li>
              <li
                className="cursor-pointer hover:text-white"
                onClick={() => handleNavigation('/faqs')}
              >
                FAQs
              </li>
              <li
                className="cursor-pointer hover:text-white"
                onClick={() => handleNavigation('/contact')}
              >
                Contact Us
              </li>
              <li
                className="cursor-pointer text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors"
                onClick={() => handleNavigation('/login')}
              >
                Log In
              </li>
              <li
                className="cursor-pointer text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition-colors"
                onClick={() => handleNavigation('/signup')}
              >
                Sign Up
              </li>
            </ul>
          </div>
          {/* Overlay: Clicking outside the sidebar closes it */}
          <div className="fixed inset-0" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
