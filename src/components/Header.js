import React from 'react';

const Header = ({ questions, categories, darkMode, setDarkMode }) => {
  return (
    <header className={`shadow-sm border-b transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500">
              Trivia Data Visualizer
            </h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex-shrink-0 px-3 py-2 rounded-lg transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;