import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { PieTooltip } from './Tooltip';

const DifficultyChart = ({ questions, selectedCategory, darkMode }) => {
  const getDifficultyData = () => {
    const filteredQuestions = selectedCategory === 'All Categories' 
      ? questions 
      : questions.filter(q => q.category === selectedCategory);
    
    const difficultyCount = { easy: 0, medium: 0, hard: 0 };
    filteredQuestions.forEach(q => {
      difficultyCount[q.difficulty]++;
    });
    
    return [
      { name: 'Easy', value: difficultyCount.easy, fill: '#10B981' },
      { name: 'Medium', value: difficultyCount.medium, fill: '#F59E0B' },
      { name: 'Hard', value: difficultyCount.hard, fill: '#EF4444' }
    ];
  };

  return (
    <div className={`p-4 sm:p-6 rounded-xl shadow-lg mb-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        Questions by Difficulty
      </h2>
      <div className="w-full flex justify-center">
        <div style={{ width: '100%', height: '300px', maxWidth: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={getDifficultyData()}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={false}
                fontSize={12}
              />
              <Tooltip content={<PieTooltip darkMode={darkMode} />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DifficultyChart;