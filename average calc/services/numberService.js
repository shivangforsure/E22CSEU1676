const fetchNumbersWithTimeout = require('../utils/fetchWithTimeout');

let slidingWindow = [];

const calculateAverage = (arr) => {
  if (!arr.length) return 0;
  const sum = arr.reduce((acc, n) => acc + n, 0);
  return parseFloat((sum / arr.length).toFixed(2));
};

const processNumbers = async (type, token) => {
  const validTypes = {
    p: 'primes',
    f: 'fibo',
    e: 'even',
    r: 'rand'
  };

  if (!validTypes[type]) {
    throw new Error('Invalid number ID');
  }

  const url = `http://20.244.56.144/evaluation-service/${validTypes[type]}`;
  const windowPrevState = [...slidingWindow];

  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => resolve([]), 490);
  });

  const fetchPromise = fetchNumbersWithTimeout(url, token);

  const numbers = await Promise.race([fetchPromise, timeoutPromise]);

  const uniqueNew = numbers.filter(num => !slidingWindow.includes(num));

  slidingWindow = [...slidingWindow, ...uniqueNew].slice(-10);

  const avg = calculateAverage(slidingWindow);

  return { windowPrevState, windowCurrState: [...slidingWindow], numbers, avg };
};

module.exports = processNumbers;
