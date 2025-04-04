const windowStore = [];

const addNumbers = (newNums, windowSize) => {
  const uniqueNums = newNums.filter(num => !windowStore.includes(num));
  windowStore.push(...uniqueNums);
  while (windowStore.length > windowSize) {
    windowStore.shift(); // Remove oldest
  }
};

const getWindow = () => [...windowStore];

const getAverage = () => {
  if (windowStore.length === 0) return 0;
  const sum = windowStore.reduce((a, b) => a + b, 0);
  return parseFloat((sum / windowStore.length).toFixed(2));
};

module.exports = {
  addNumbers,
  getWindow,
  getAverage
};
