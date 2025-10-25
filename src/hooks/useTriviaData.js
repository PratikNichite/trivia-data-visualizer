import { useState, useEffect } from 'react';
import { fetchTriviaQuestions } from '../services/api';
import { decodeHtml } from '../utils/helpers';

export const useTriviaData = () => {
  const [questions, setQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchTriviaQuestions();
        
        const decodedQuestions = data.results.map(q => ({
          ...q,
          category: decodeHtml(q.category),
          question: decodeHtml(q.question),
          correct_answer: decodeHtml(q.correct_answer),
          incorrect_answers: q.incorrect_answers.map(decodeHtml)
        }));
        
        setQuestions(decodedQuestions);
        
        const uniqueCategories = [...new Set(decodedQuestions.map(q => q.category))];
        setCategories(uniqueCategories);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { questions, categories, loading, error };
};