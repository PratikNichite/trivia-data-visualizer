import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionsList = ({ questions, selectedCategory, darkMode }) => {
  const getFilteredQuestions = () => {
    return selectedCategory === 'All Categories' 
      ? questions 
      : questions.filter(q => q.category === selectedCategory);
  };

  const filteredQuestions = getFilteredQuestions();

  return (
    <div className={`p-4 sm:p-6 rounded-xl shadow-lg transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className="text-lg sm:text-xl font-semibold mb-6">
        Questions {selectedCategory !== 'All Categories' && `in ${selectedCategory}`}
        <span className={`ml-2 text-sm font-normal ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          ({filteredQuestions.length} total)
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {filteredQuestions.map((question, index) => (
          <QuestionCard 
            key={index} 
            question={question} 
            darkMode={darkMode} 
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;