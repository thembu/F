import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful login
import tts_logo from '../assets/lo.gif'; // Import the TTS logo
import { signIn } from '../firebaseFunctions';
import hj from '../assets/no.png'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const [showContent, setShowContent] = useState(false); // For content transition
  const navigate = useNavigate(); // Hook for page redirection after login

  useEffect(() => {
    // Add a slight delay before showing the content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 200); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation check
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Call the signIn function from firebaseFunctions.js
      const user = await signIn(email, password);
      console.log('User logged in:', user); // Log the user object (for debugging)
      
      navigate('/user_dashboard');
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container flex flex-col items-center justify-center min-h-screen bg-whitesmoke p-6"
    style={{ backgroundImage: `url(${hj})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}
    
    >
      {/* Logo */}
      <img
        src={tts_logo}
        alt="TTS Logo"
        className={`mb-6 w-50 transition-all duration-700  ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        }`}
      />

      <h2
        className={`text-3xl font-bold text-gray-800 mb-6 transition-all duration-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Login to Tlowedi Tutoring Solutions
      </h2>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-sm bg-white p-8 rounded-lg shadow-lg transition-all duration-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Log In
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full text-center mt-12 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Tlowedi Tutoring Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;
