// src/components/Welcome.js
import React from 'react';
import './styles.css';

const Welcome = ({ setView }) => (
  <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
    <h2 className="text-2xl font-bold mb-4 text-center">Role-Based Access Control</h2>
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => setView('login')}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Login
      </button>
      <button
        onClick={() => setView('signup')}
        className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Signup
      </button>
    </div>
  </div>
);

export default Welcome;
