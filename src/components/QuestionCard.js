import React from 'react';

const QuestionCard = ({ question, darkMode }) => {
  return (
    <div
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 hover:border-blue-500' 
          : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-400'
      }`}
    >
      {/* Header with badges */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
          question.difficulty === 'easy' 
            ? 'bg-green-500 text-white shadow-lg' 
            : question.difficulty === 'medium'
            ? 'bg-yellow-500 text-white shadow-lg'
            : 'bg-red-500 text-white shadow-lg'
        }`}>
          {question.difficulty}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          darkMode 
            ? 'bg-gray-600 text-gray-300' 
            : 'bg-gray-100 text-gray-600'
        }`}>
          {question.type === 'boolean' ? 'T/F' : 'Multiple'}
        </span>
      </div>
      
      {/* Question */}
      <h3 className={`font-semibold mb-4 leading-relaxed text-base ${
        darkMode ? 'text-gray-100' : 'text-gray-900'
      }`}>
        {question.question}
      </h3>
      
      {/* Category */}
      <div className={`mb-3 pb-3 border-b ${
        darkMode ? 'border-gray-600' : 'border-gray-200'
      }`}>
        <span className={`text-sm font-medium ${
          darkMode ? 'text-blue-400' : 'text-blue-600'
        }`}>
          {question.category}
        </span>
      </div>
      
      {/* Answer */}
      <div className={`p-3 rounded-lg ${
        darkMode ? 'bg-gray-600' : 'bg-blue-50'
      }`}>
        <div className={`text-xs font-medium mb-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Correct Answer:
        </div>
        <div className={`font-semibold ${
          darkMode ? 'text-green-400' : 'text-green-700'
        }`}>
          {question.correct_answer}
        </div>
      </div>

    </div>
  );
};

export default QuestionCard;