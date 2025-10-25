import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './Tooltip';

const CategoryChart = ({ questions, darkMode }) => {
  const getCategoryData = () => {
    const categoryCount = {};
    questions.forEach(q => {
      categoryCount[q.category] = (categoryCount[q.category] || 0) + 1;
    });
    
    return Object.entries(categoryCount).map(([name, value]) => ({ name, value }));
  };

  return (
    <div className={`p-4 sm:p-6 rounded-xl shadow-lg mb-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        Questions by Category
      </h2>
      <div className="w-full overflow-x-auto">
        <div style={{ minWidth: '300px', width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getCategoryData()} margin={{ top: 20, right: 10, left: 10, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#374151' : '#E5E7EB'} />
              <XAxis 
                dataKey="name" 
                stroke={darkMode ? '#9CA3AF' : '#6B7280'}
                fontSize={10}
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis stroke={darkMode ? '#9CA3AF' : '#6B7280'} fontSize={12} />
              <Tooltip content={<CustomTooltip darkMode={darkMode} />} />
              <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CategoryChart;