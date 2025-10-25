import React from 'react';

const CategoryFilter = ({ 
  categories, 
  questions, 
  selectedCategory, 
  setSelectedCategory, 
  getCurrentSelectionCount, 
  darkMode 
}) => {
  return (
    <div className={`p-4 sm:p-6 rounded-xl shadow-lg mb-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className="text-lg sm:text-xl font-semibold mb-4">
        Filter by Category
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`w-full p-3 rounded-lg border transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            <option value="All Categories">All Categories</option>
            {categories.map(category => {
              const count = questions.filter(q => q.category === category).length;
              return (
                <option key={category} value={category}>
                  {category} ({count} questions)
                </option>
              );
            })}
          </select>
        </div>
        <div className={`px-4 py-3 rounded-lg border ${
          darkMode 
            ? 'border-gray-600 bg-gray-700' 
            : 'border-gray-300 bg-gray-50'
        }`}>
          <span className="font-semibold text-blue-500">
            {getCurrentSelectionCount()}
          </span>
          <span className={`ml-1 text-sm ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            questions
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;