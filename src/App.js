import React, { useState } from 'react';
import Header from './components/Header';
import CategoryChart from './components/CategoryChart';
import CategoryFilter from './components/CategoryFilter';
import DifficultyChart from './components/DifficultyChart';
import QuestionsList from './components/QuestionsList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import { useTriviaData } from './hooks/useTriviaData';

function App() {
  const { questions, categories, loading, error } = useTriviaData();
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [darkMode, setDarkMode] = useState(true);

  const getFilteredQuestions = () => {
    return selectedCategory === 'All Categories' 
      ? questions 
      : questions.filter(q => q.category === selectedCategory);
  };

  const getCurrentSelectionCount = () => {
    return getFilteredQuestions().length;
  };

  if (loading) {
    return <LoadingSpinner darkMode={darkMode} />;
  }

  if (error) {
    return <ErrorDisplay error={error} darkMode={darkMode} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Header 
        questions={questions} 
        categories={categories} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <CategoryChart questions={questions} darkMode={darkMode} />
        
        <CategoryFilter 
          categories={categories}
          questions={questions}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          getCurrentSelectionCount={getCurrentSelectionCount}
          darkMode={darkMode}
        />
        
        <DifficultyChart 
          questions={questions} 
          selectedCategory={selectedCategory} 
          darkMode={darkMode} 
        />
        
        <QuestionsList 
          questions={questions} 
          selectedCategory={selectedCategory} 
          darkMode={darkMode} 
        />
      </main>
    </div>
  );
}

export default App;