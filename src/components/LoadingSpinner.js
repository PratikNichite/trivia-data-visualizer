import React from 'react';

const LoadingSpinner = ({ darkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-lg">Loading trivia questions...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;