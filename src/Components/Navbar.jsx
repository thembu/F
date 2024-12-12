import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Define a function to handle navigation
  const handleNavigation = (path) => {
    navigate(path); // This will navigate to the specified path
  };

  return (
    <div className="navbar w-full bg-navbarblack p-12 font-professional rounded-lg shadow-lg m-0">
      <ul className="flex justify-around text-blue-500">
        <li 
          className="cursor-pointer hover:text-white" 
          onClick={() => handleNavigation('/')}
        > 
          Home 
        </li>
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

        {/* Log In and Sign Up Buttons */}
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
  );
};

export default Navbar;
