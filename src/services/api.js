const CORS_PROXIES = [
  'https://api.allorigins.win/raw?url=',
  'https://corsproxy.io/?',
  'https://api.codetabs.com/v1/proxy?quest=',
  'https://thingproxy.freeboard.io/fetch/'
];

export const fetchTriviaQuestions = async () => {
  const apiUrl = 'https://opentdb.com/api.php?amount=50';
  
  for (let i = 0; i < CORS_PROXIES.length; i++) {
    try {
      const proxyUrl = CORS_PROXIES[i] + encodeURIComponent(apiUrl);
      console.log(`🔄 Trying CORS proxy ${i + 1}...`);
      
      const response = await fetch(proxyUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.results && Array.isArray(data.results) && data.results.length > 0) {
        console.log('✅ Successfully fetched real API data via CORS proxy!');
        return data;
      } else {
        throw new Error('Invalid data structure received');
      }
      
    } catch (error) {
      console.warn(`❌ CORS proxy ${i + 1} failed:`, error.message);
      
      if (i === CORS_PROXIES.length - 1) {
        throw new Error('All CORS proxies failed. Please try again later.');
      }
    }
  }
};