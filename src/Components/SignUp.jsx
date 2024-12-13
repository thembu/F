import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful sign-up
import { signUp } from '../firebaseFunctions'; // Import sign-up function from firebaseFunctions.js
import hj from '../assets/no.png'

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    subjects: [],
    username: '',
    password: '',
    confirmPassword: '',
    email: '', // Added email to form data
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for page redirection after sign-up

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Handle checkbox list for subjects
      setFormData((prevData) => {
        const updatedSubjects = checked
          ? [...prevData.subjects, value]
          : prevData.subjects.filter((subject) => subject !== value);

        return { ...prevData, subjects: updatedSubjects };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  //sign up function for firebase



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.firstName || !formData.lastName || !formData.grade || !formData.username || !formData.password || !formData.confirmPassword || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }


    signUp(formData.email, formData.password);

    // Handle successful sign-up (Mocking sign-up process)
    // Replace with actual sign-up logic (e.g., API request)
    navigate('/login');
  };

  return (
    <div className="sign-up-container flex flex-col items-center justify-center min-h-screen bg-whitesmoke p-6 transition-all duration-500 ease-in-out"
    style={{ backgroundImage: `url(${hj})` }}

    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 transition-all duration-500 ease-in-out">Sign Up to Tlowedi Tutoring Solutions</h2>

      {/* Sign-up Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your last name"
            required
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Grade */}
        <div className="mb-4">
          <label htmlFor="grade" className="block text-gray-700 text-sm font-semibold mb-2">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your grade"
            required
          />
        </div>

        {/* Subjects */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Subjects</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Math"
                name="subjects"
                checked={formData.subjects.includes('Math')}
                onChange={handleChange}
                className="form-checkbox transition-all duration-300 ease-in-out"
              />
              <span className="ml-2">Math</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Science"
                name="subjects"
                checked={formData.subjects.includes('Science')}
                onChange={handleChange}
                className="form-checkbox transition-all duration-300 ease-in-out"
              />
              <span className="ml-2">Science</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="English"
                name="subjects"
                checked={formData.subjects.includes('English')}
                onChange={handleChange}
                className="form-checkbox transition-all duration-300 ease-in-out"
              />
              <span className="ml-2">English</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="History"
                name="subjects"
                checked={formData.subjects.includes('History')}
                onChange={handleChange}
                className="form-checkbox transition-all duration-300 ease-in-out"
              />
              <span className="ml-2">History</span>
            </label>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Confirm your password"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4 transition-all duration-300 ease-in-out">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
